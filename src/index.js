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
  // 完了ボタンクリックイベント
  completeButton.addEventListener("click", () => {
    const parent_div = completeButton.parentNode;
    //liのテキスト取得
    const text = parent_div.firstElementChild.innerText;
    //未完了リストから削除
    deleteFromIncompleteList(parent_div);

    //div初期化
    parent_div.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    //戻すボタンクリックイベント
    returnButton.addEventListener("click", () => {
      const parent_div = returnButton.parentNode;
      //liのテキスト取得
      const text = parent_div.firstElementChild.innerText;
      //未完了リストから削除
      document.getElementById("comlete-list").removeChild(parent_div);

      parent_div.textContent = null;

      const li = document.createElement("li");
      li.innerText = text;

      createIncompleteList(text);
    });

    parent_div.appendChild(li);
    parent_div.appendChild(returnButton);

    //未完了リストに追加
    document.getElementById("comlete-list").appendChild(parent_div);
  });
  // 削除ボタンクリックイベント
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    // const deleteTerget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteButton.parentNode);
    // document.getElementById("incomplete-list").removeChild(deleteTerget);
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

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //bittonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンクリックイベント
  completeButton.addEventListener("click", () => {
    const parent_div = completeButton.parentNode;
    //liのテキスト取得
    const text = parent_div.firstElementChild.innerText;
    //未完了リストから削除
    deleteFromIncompleteList(parent_div);

    //div初期化
    parent_div.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    //戻すボタンクリックイベント
    returnButton.addEventListener("click", () => {
      const parent_div = returnButton.parentNode;
      //liのテキスト取得
      const text = parent_div.firstElementChild.innerText;
      //未完了リストから削除
      document.getElementById("comlete-list").removeChild(parent_div);

      parent_div.textContent = null;

      const li = document.createElement("li");
      li.innerText = text;
    });

    parent_div.appendChild(li);
    parent_div.appendChild(returnButton);

    //未完了リストに追加
    document.getElementById("comlete-list").appendChild(parent_div);
  });
  // 削除ボタンクリックイベント
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    // const deleteTerget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteButton.parentNode);
    // document.getElementById("incomplete-list").removeChild(deleteTerget);
  });
  deleteButton.innerText = "削除";

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
