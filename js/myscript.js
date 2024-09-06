const tabs = ["changeTab", "changeTab2", "changeTab3"];

function onClickChangeTab(id) {
  for (let index = 0; index < tabs.length; index++) {
    const tabChange = document.getElementById(tabs[index]);
    tabChange.classList.remove("tab-active");
  }
  const tab = document.getElementById(id);
  tab.classList.add("tab-active");
}
