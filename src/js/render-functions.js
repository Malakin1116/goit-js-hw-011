
export const createMarkupItem = images => {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
  <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img
        class="gallery-image"
        src="${webformatURL}"
        alt="${tags}"
      />
    </a>
    <div class="small-content">
        <span class="text-body-likes">Likes: ${likes}</span>
        <span class="text-body-views">Views: ${views}</span>
        <span class="text-body-comments">Comments: ${comments}</span>
        <span class="text-body-downloads">Downloads: ${downloads}</span>
    </div>
  </li>
`;
      }
    )
    .join('');
};


