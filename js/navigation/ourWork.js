document.addEventListener("DOMContentLoaded", function () {

  const tabs = document.querySelectorAll(".work-tabs li");
  const grids = document.querySelectorAll(".work-grid");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      // ACTIVE TAB
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // SHOW CONTENT
      const target = tab.getAttribute("data-tab");

      grids.forEach(grid => {
        grid.classList.remove("active");

        if (grid.id === target) {
          grid.classList.add("active");
        }
      });

    });
  });
});