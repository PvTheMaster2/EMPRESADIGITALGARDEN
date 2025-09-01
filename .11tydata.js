module.exports = {
  layout: "base.njk",
  eleventyComputed: {
    // Gera permalinks limpos automaticamente
    permalink: (data) => {
      // Se já tem permalink definido no frontmatter, usa ele
      if (data.permalink) {
        return data.permalink;
      }
      
      // Casos especiais para páginas principais
      if (data.page.filePathStem === "/0-Dashboard-Executivo/Home-Executivo") {
        return "/";
      }
      
      // README files específicos (mas não o da raiz)
      if (data.page.filePathStem.includes("/README") && data.page.filePathStem !== "/README") {
        // README files viram index da pasta
        let path = data.page.filePathStem
          .replace("/README", "")
          .split("/")
          .filter(seg => seg !== "")
          .map(seg => seg.replace(/^\d+-/, "").toLowerCase())
          .join("/");
        
        return "/" + path + "/";
      }

      // Gera permalink limpo removendo números e convertendo para minúsculo
      let path = data.page.filePathStem
        .split("/")
        .filter(seg => seg !== "")
        .map(seg => seg.replace(/^\d+-/, "").toLowerCase().replace(/\s+/g, "-"))
        .join("/");
      
      return "/" + path + "/";
    },
    
    // Gera title automaticamente se não existir
    title: (data) => {
      if (data.title) return data.title;
      
      // Usa o nome do arquivo como título, removendo números e formatando
      let fileName = data.page.fileSlug;
      return fileName
        .replace(/^\d+-/, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
    }
  }
};
