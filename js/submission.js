const upload = document.querySelector('#upload-input');
const uploadButton = document.querySelector('#upload-btn');
const selectButton = document.querySelector('#select-btn');
const tbody = document.querySelector('#upload-tbody');

selectButton.addEventListener('click', () => {
  upload.click();
});

upload.addEventListener('change', () => {
  // 选择的文件追加到表格中, 并且每个后面加上一个删除按钮
  const files = upload.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const tr = document.createElement('tr');
    const textTd = document.createElement('td');
    const span = document.createElement('span');
    const btnTd = document.createElement('td');
    const button = document.createElement('button');
    span.innerText = file.name;
    button.innerText = '删除';
    button.addEventListener('click', () => {
      tbody.removeChild(tr);
      if (tbody.children.length === 0) {
        uploadButton.style.display = 'none';
      }
    });
    textTd.appendChild(span);
    btnTd.appendChild(button);
    tr.appendChild(textTd);
    tr.appendChild(btnTd);
    tbody.appendChild(tr);
  }
  // 选择完文件后, 显示上传按钮
  uploadButton.style.display = 'inline-block';
});

uploadButton.addEventListener('click', () => {
  // 提示用户上传成功,然后直接清空表格
  alert('上传成功');
  tbody.innerHTML = '';
  uploadButton.style.display = 'none';
});
