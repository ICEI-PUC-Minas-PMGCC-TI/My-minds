const reportList = document.getElementById("reportList");
const toggleBtn = document.getElementById("toggleBtn");
let reports = [
  { title: "Relatório João Victor Filardi", link: "https://exemplo.com/relatorio1" },
  { title: "Relatório Larrisa Maia", link: "https://exemplo.com/relatorio2" },
  { title: "Relatório Carlos Silva", link: "https://exemplo.com/relatorio3" },
  { title: "Relatório Laura Belo", link: "https://exemplo.com/relatorio4" },
  { title: "Relatório Nelson Ferreira", link: "https://exemplo.com/relatorio5" },
  { title: "Relatório Lucas Fagundes", link: "https://exemplo.com/relatorio6" }
];
let isReversed = false;

function renderReports() {
  reportList.innerHTML = "";
  const sortedReports = isReversed ? [...reports].reverse() : reports;

  sortedReports.forEach((report) => {
    const li = document.createElement("li");
    li.classList.add("report");

    const title = document.createElement("a");
    title.textContent = report.title;
    title.href = report.link;
    li.appendChild(title);

    const date = document.createElement("span");
    date.textContent = " Carregado em: " + new Date().toLocaleString(); // Adiciona a data e horário de carregamento
    li.appendChild(date);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "&#128465;";
    deleteBtn.addEventListener("click", () => {
      showDeleteConfirmation(report);
    });
    li.appendChild(deleteBtn);

    reportList.appendChild(li);
  });
}

function showDeleteConfirmation(report) {
  const confirmed = confirm("Tem certeza que deseja excluir o relatório?");
  if (confirmed) {
    deleteReport(report);
  }
}

function deleteReport(report) {
  reports = reports.filter((r) => r !== report);
  renderReports();
}

toggleBtn.addEventListener("click", () => {
  isReversed = !isReversed;
  toggleBtn.innerHTML = isReversed ? '<i class="fas fa-chevron-up"></i>' : '<i class="fas fa-chevron-down"></i>';
  renderReports();
});

renderReports();

// Função para buscar relatórios da API e atribuir à variável "reports"
function fetchReportsFromAPI() {
  fetch("https://api.exemplo.com/relatorios")
    .then((response) => response.json())
    .then((data) => {
      reports = data; // Atribui os relatórios retornados pela API à variável "reports"
      renderReports(); // Exibe os relatórios na página
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao buscar os relatórios:", error);
    });
}

// Chama a função para buscar relatórios da API ao carregar a página
fetchReportsFromAPI();
