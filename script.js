(function() {
    const styleTag = `
      ._searchBarWrap_1y76n_1{padding:1.3vw;text-align:center}
      ._searchBar_1y76n_1{
        text-align:center;
        width:17vw;
        font-size:1.5vw;
        height:3.5vw;
        border-radius:30px;
        border-width:0;
        color:var(--secondary-color);
        background-color:var(--search-bar-color)
      }
      ._searchBar_1y76n_1::placeholder{
        color:var(--secondary-color);
        font-weight:700;
      }
      ._searchBar_1y76n_1:focus{
        outline:none;
      }
    `;
    const style = document.createElement('style');
    style.innerHTML = styleTag;
    document.head.appendChild(style);
})();

function libraryFilter() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const appsDisplayItems = document.getElementsByClassName("_appsDisplayItem_tuoqq_23");
  const appsDisplayTitles = document.getElementsByClassName("_appsDisplayTitle_tuoqq_67");

  Array.from(appsDisplayItems).forEach((item, index) => {
    const title = appsDisplayTitles[index].textContent.toLowerCase();
    const shouldDisplay = title.includes(input);
    item.style.display = shouldDisplay ? "block" : "none";
  });
}
