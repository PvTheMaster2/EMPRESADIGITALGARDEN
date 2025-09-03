#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Script to analyze and combine project files into a single markdown document.
Creates a hierarchical view of the project structure and includes contents of readable files.
Useful for project documentation and analysis by LLMs.

Modifications:
- Excludes CSV files from analysis
- Includes images in the markdown output
- Organizes content by type (code, images, data)
"""

import os
import sys
from datetime import datetime
import mimetypes
import base64

class ProjectAnalyzer:
    def __init__(self):
        # Extensions that we consider as readable text files
        self.text_extensions = {
            '.py', '.js', '.html', '.css', '.java', '.c', '.cpp', '.h',
            '.json', '.md', '.txt', '.xml', '.yaml', '.yml', '.ini',
            '.cfg', '.conf', '.jsx', '.tsx', '.ts', '.svg', '.sql',
            '.sh', '.bat', '.ps1', '.env', '.gitignore', '.dockerignore',
            '.rst', '.properties', '.gradle', '.toml', '.lock'
        }
        
        # Image extensions that we want to include
        self.image_extensions = {
            '.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff', '.tif',
            '.webp', '.svg', '.ico', '.eps'
        }
        
        # Extensions to explicitly exclude (CSV files)
        self.excluded_extensions = {
            '.csv'  # Excluding CSV files as requested
        }
        
        # Files and directories to ignore
        self.ignore_files = {
            '.git', '.idea', '.vscode', '__pycache__', 'node_modules',
            'venv', 'env', '.env', '.DS_Store', 'Thumbs.db'
        }
        
        # Size limits to prevent memory issues
        self.max_file_size_mb = 5  # Maximum file size to read (in MB)
        self.max_total_output_mb = 50  # Maximum total output size (in MB)
        
        # Initialize mimetypes
        mimetypes.init()

    def get_file_size_str(self, file_path):
        """Get human-readable file size."""
        size_bytes = os.path.getsize(file_path)
        
        if size_bytes < 1024:
            return f"{size_bytes} bytes"
        elif size_bytes < 1024 * 1024:
            return f"{size_bytes / 1024:.2f} KB"
        else:
            return f"{size_bytes / (1024 * 1024):.2f} MB"

    def is_excluded_file(self, file_path):
        """Check if file should be excluded (like CSV files)."""
        _, ext = os.path.splitext(file_path)
        ext = ext.lower()
        return ext in self.excluded_extensions

    def is_text_file(self, file_path):
        """Determine if a file is a text file based on extension and content."""
        # First check if file is excluded
        if self.is_excluded_file(file_path):
            return False
            
        _, ext = os.path.splitext(file_path)
        ext = ext.lower()
        
        # Check if extension is in our text extensions list
        if ext in self.text_extensions:
            return True
            
        # Try to detect by mime type
        mime_type = mimetypes.guess_type(file_path)[0]
        if mime_type and mime_type.startswith('text/'):
            return True
            
        # Try to read file as text
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                f.read(1024)  # Try to read first 1KB
                return True
        except:
            return False

    def is_image_file(self, file_path):
        """Check if file is an image."""
        _, ext = os.path.splitext(file_path)
        ext = ext.lower()
        return ext in self.image_extensions

    def should_ignore(self, path):
        """Check if the path should be ignored."""
        return any(ignore in path for ignore in self.ignore_files)

    def is_file_too_large(self, file_path):
        """Check if file is too large to process."""
        try:
            size_mb = os.path.getsize(file_path) / (1024 * 1024)
            return size_mb > self.max_file_size_mb
        except:
            return True

    def generate_tree_structure(self, start_path, output_file):
        """Generate the project tree structure and write to the markdown file."""
        with open(output_file, 'w', encoding='utf-8') as out:
            # Write header
            out.write(f"# 📊 Project Analysis Report\n\n")
            out.write(f"**Generated on:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n")
            out.write(f"**Root directory:** `{os.path.abspath(start_path)}`  \n")
            out.write(f"**Purpose:** Complete project structure documentation excluding CSV files\n\n")
            
            # Write project summary
            total_files = 0
            text_files = 0
            image_files = 0
            excluded_files = 0
            large_files = 0
            
            for root, dirs, files in os.walk(start_path):
                dirs[:] = [d for d in dirs if not self.should_ignore(os.path.join(root, d))]
                for file in files:
                    file_path = os.path.join(root, file)
                    if self.should_ignore(file_path):
                        continue
                    total_files += 1
                    if self.is_file_too_large(file_path):
                        large_files += 1
                    elif self.is_excluded_file(file_path):
                        excluded_files += 1
                    elif self.is_text_file(file_path):
                        text_files += 1
                    elif self.is_image_file(file_path):
                        image_files += 1
            
            out.write(f"## 📈 Project Summary\n\n")
            out.write(f"- **Total files analyzed:** {total_files}\n")
            out.write(f"- **📄 Code/Text files:** {text_files}\n")
            out.write(f"- **🖼️ Image files:** {image_files}\n")
            out.write(f"- **🚫 Excluded files (CSV):** {excluded_files}\n")
            out.write(f"- **⚠️ Large files (> {self.max_file_size_mb}MB):** {large_files}\n")
            out.write(f"- **📁 Other files:** {total_files - text_files - image_files - excluded_files - large_files}\n\n")
            
            # Write project tree structure
            out.write("## 🌳 Project Structure\n\n")
            out.write("```\n")
            self.write_tree(start_path, out)
            out.write("```\n\n")
            
            # Write file contents
            out.write("## 📋 Project Contents\n\n")
            self.write_file_contents(start_path, out)

    def write_tree(self, start_path, out, prefix=""):
        """Write the tree structure of the project."""
        items = sorted(os.listdir(start_path))
        
        for i, item in enumerate(items):
            path = os.path.join(start_path, item)
            
            if self.should_ignore(path):
                continue
                
            is_last = i == len(items) - 1
            
            # Add file type indicators
            if os.path.isfile(path):
                if self.is_excluded_file(path):
                    item_display = f"{item} (CSV - excluded)"
                elif self.is_image_file(path):
                    item_display = f"{item} 🖼️"
                elif self.is_text_file(path):
                    item_display = f"{item} 📄"
                else:
                    item_display = f"{item} 📁"
            else:
                item_display = f"{item} 📁"
                
            out.write(f"{prefix}{'└── ' if is_last else '├── '}{item_display}\n")
            
            if os.path.isdir(path):
                self.write_tree(path, out, prefix + ('    ' if is_last else '│   '))

    def write_file_contents(self, start_path, out, current_path=""):
        """Write the contents of all readable files and images."""
        # Collect files by type
        text_files = []
        image_files = []
        excluded_files = []
        large_files = []  # Files that are too large to process
        
        for root, dirs, files in os.walk(start_path):
            # Skip ignored directories
            dirs[:] = [d for d in dirs if not self.should_ignore(os.path.join(root, d))]
            
            for file in files:
                file_path = os.path.join(root, file)
                
                if self.should_ignore(file_path):
                    continue
                
                # Check file size first
                if self.is_file_too_large(file_path):
                    large_files.append(file_path)
                    continue
                
                if self.is_excluded_file(file_path):
                    excluded_files.append(file_path)
                elif self.is_text_file(file_path):
                    text_files.append(file_path)
                elif self.is_image_file(file_path):
                    image_files.append(file_path)
        
        # Write large files summary
        if large_files:
            out.write(f"### ⚠️ Large Files (> {self.max_file_size_mb}MB)\n\n")
            out.write(f"Total large files skipped: {len(large_files)}\n\n")
            for file_path in sorted(large_files):
                rel_path = os.path.relpath(file_path, start_path)
                file_size = self.get_file_size_str(file_path)
                out.write(f"- `{rel_path}` ({file_size})\n")
            out.write("\n---\n\n")
        
        # Write excluded files summary
        if excluded_files:
            out.write(f"### 🚫 Excluded Files (CSV)\n\n")
            out.write(f"Total excluded files: {len(excluded_files)}\n\n")
            for file_path in sorted(excluded_files):
                rel_path = os.path.relpath(file_path, start_path)
                file_size = self.get_file_size_str(file_path)
                out.write(f"- `{rel_path}` ({file_size})\n")
            out.write("\n---\n\n")
        
        # Write images section
        if image_files:
            out.write(f"### 🖼️ Project Images\n\n")
            for file_path in sorted(image_files):
                rel_path = os.path.relpath(file_path, start_path)
                file_size = self.get_file_size_str(file_path)
                
                out.write(f"#### {rel_path}\n")
                out.write(f"*Size: {file_size}*\n\n")
                
                # Include image in markdown
                # Convert path separators to forward slashes for markdown
                image_path = rel_path.replace('\\', '/')
                out.write(f"![{os.path.basename(file_path)}]({image_path})\n\n")
                out.write("---\n\n")
        
        # Write text files section
        if text_files:
            out.write(f"### 📄 Code and Text Files\n\n")
            
            current_dir = ""
            processed_files = 0
            for file_path in sorted(text_files):
                file_dir = os.path.dirname(file_path)
                rel_dir = os.path.relpath(file_dir, start_path)
                
                # Write directory header if changed
                if rel_dir != current_dir and rel_dir != ".":
                    current_dir = rel_dir
                    out.write(f"\n#### 📁 Directory: {rel_dir}\n\n")
                
                try:
                    # Write file header
                    file_size = self.get_file_size_str(file_path)
                    rel_file_path = os.path.relpath(file_path, start_path)
                    out.write(f"##### 📄 {os.path.basename(file_path)}\n")
                    out.write(f"*Path: `{rel_file_path}`*  \n")
                    out.write(f"*Size: {file_size}*\n\n")
                    
                    # Write file contents
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        
                        # Limit content size if too large
                        if len(content) > 10000:  # Limit to ~10KB per file display
                            content = content[:10000] + "\n\n... (Content truncated - file too large)"
                        
                        ext = os.path.splitext(file_path)[1].lstrip('.')
                        if not ext:
                            ext = 'text'
                        out.write(f"```{ext}\n")
                        out.write(content)
                        if not content.endswith('\n'):
                            out.write('\n')
                        out.write("```\n\n")
                        out.write("---\n\n")
                        
                    processed_files += 1
                    
                    # Add progress indicator for large projects
                    if processed_files % 10 == 0:
                        print(f"📄 Processed {processed_files} text files...")
                        
                except Exception as e:
                    out.write(f"*Error reading file: {str(e)}*\n\n")
                    out.write("---\n\n")

def main():
    # Get the script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Change to the script directory
    os.chdir(script_dir)
    
    # Create analyzer instance
    analyzer = ProjectAnalyzer()
    
    # Ask for output file name
    output_name = input("Enter the output file name (without extension): ")
    output_file = f"{output_name}.md"
    
    print(f"\nAnalyzing project structure...")
    analyzer.generate_tree_structure(".", output_file)
    print(f"\nProject analysis complete! Output written to '{output_file}'")

if __name__ == "__main__":
    main() 