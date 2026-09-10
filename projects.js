(() => {
  const escapeHtml = (value) => {
    const element = document.createElement("span");
    element.textContent = value || "";
    return element.innerHTML;
  };

  const detailUrl = (project) => `project.html?slug=${encodeURIComponent(project.slug)}`;

  const card = (project, index, compact) => {
    const delay = (index % 4) + 1;
    const imageClass = compact ? "project-image" : "project-image-work";
    const columns = compact ? "col-lg-4" : "col-md-4 col-lg-3";
    return `<div class="${columns} reveal reveal-up reveal-delay-${delay}">
      <article class="project-item">
        <div class="${imageClass}"><a href="${detailUrl(project)}"><img src="${escapeHtml(project.cover)}" alt="${escapeHtml(project.title)}" loading="lazy"></a></div>
        <div class="project-body"><h4>${escapeHtml(project.title)}</h4><p>${escapeHtml(project.category)}</p></div>
      </article>
    </div>`;
  };

  const reveal = (element) => element.querySelectorAll(".reveal").forEach((item) => item.classList.add("show"));

  const renderHome = (projects) => {
    const grid = document.getElementById("home-projects-grid");
    if (!grid) return;
    grid.innerHTML = projects.slice(0, 6).map((project, index) => card(project, index, true)).join("");
    reveal(grid);
  };

  const renderWork = (projects) => {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;
    const pagination = document.getElementById("work-pagination");
    const previous = document.getElementById("prev-page");
    const next = document.getElementById("next-page");
    const current = document.getElementById("current-page");
    const total = document.getElementById("total-pages");
    const perPage = SITE_CONFIG.PROJECTS_PER_PAGE || 12;
    const pages = Math.ceil(projects.length / perPage);
    let page = 1;

    const renderPage = () => {
      grid.innerHTML = projects.slice((page - 1) * perPage, page * perPage)
        .map((project, index) => card(project, index, false)).join("");
      reveal(grid);
      pagination.hidden = pages <= 1;
      current.textContent = page;
      total.textContent = pages;
      previous.disabled = page === 1;
      next.disabled = page === pages;
    };

    previous.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      if (page === 1) return;
      page -= 1;
      renderPage();
      document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    }, true);
    next.addEventListener("click", (event) => {
      event.stopImmediatePropagation();
      if (page === pages) return;
      page += 1;
      renderPage();
      document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    }, true);
    renderPage();
  };

  fetch(SITE_CONFIG.PROJECTS_FILE)
    .then((response) => response.ok ? response.json() : Promise.reject(new Error(`HTTP ${response.status}`)))
    .then((projects) => { renderHome(projects); renderWork(projects); })
    .catch((error) => console.warn("[Projects] Could not load projects.json:", error.message));
})();
