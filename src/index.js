import "./styles.css";

const onClickAdd = () => {
  const el_addtext = document.getElementById("add-text");
  const inputText = el_addtext.value;
  el_addtext.value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //bittonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {});

  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTerget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTerget);
  });
  deleteButton.innerText = "削除";

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
