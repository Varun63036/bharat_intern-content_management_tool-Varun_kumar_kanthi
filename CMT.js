var addTitle = document.getElementById("addtitle");
var addContent = document.getElementById("addcontent");
var previewContainer = document.getElementById("preview_container");
var imageInput = document.getElementById("image_input");
var videoInput = document.getElementById("video_input");
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const title = addTitle.value;
  const content = addContent.value;
  const image = imageInput.files[0];
  const video = videoInput.files[0];

  const preview = document.createElement("div");
  preview.classList.add("preview");

  const titleHeader = document.createElement("h2");
  titleHeader.textContent = title;
  titleHeader.style.color = "white";
  titleHeader.style.backgroundColor = "black";
  titleHeader.style.padding = "10px 20px";
  titleHeader.style.textAlign = "center";
  titleHeader.style.webkitTextSizeAdjust = "20px";
  preview.appendChild(titleHeader);

  if (image) {
    const imagePreview = document.createElement("img");
    const imageUrl = URL.createObjectURL(image);
    imagePreview.src = imageUrl;
    preview.appendChild(imagePreview);
    imagePreview.style.width = "35%";
    imagePreview.style.height = "35%";
    imagePreview.style.marginTop = "10px";
    imagePreview.style.marginRight = "auto";
    imagePreview.style.marginLeft = "auto";
  }

  const contentParagraph = document.createElement("p");
  contentParagraph.textContent = content;
  contentParagraph.style.color = "FFFFFF";
  contentParagraph.style.backgroundColor = "black";
  contentParagraph.style.padding = "10px 20px";
  contentParagraph.style.fontSize = "20px";

  preview.appendChild(contentParagraph);

  if (video) {
    const videoPreview = document.createElement("video");
    videoPreview.controls = true;
    const videoUrl = URL.createObjectURL(video);
    videoPreview.src = videoUrl;
    videoPreview.style.width = "40%";
    videoPreview.style.height = "40%";
    videoPreview.style.marginTop = "10px";
    videoPreview.style.marginRight = "auto";
    videoPreview.style.marginLeft = "auto";
    preview.appendChild(videoPreview);
  }

  previewContainer.appendChild(preview);
});
