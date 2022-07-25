(function () {
	const injectElementBtn = document.createElement('button');

	injectElementBtn.style.cssText = 'color: #fff; background-color: transparent; border: none; font-size: 26px; cursor: pointer;';

	injectElementBtn.setAttribute('title', 'Download');
	injectElementBtn.setAttribute('aria-label', 'Download');

	injectElementBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>`;

	injectElementBtn.onclick = function () {
		const currentUrl = window.location.href;
		const urlObj = new URL(currentUrl);
		const videoId = urlObj.searchParams.get('v');
		const downloadLink = 'https://www.youtubepi.com/watch?v=' + videoId;

		window.open(downloadLink, '_blank').focus();

		return false;
	};

	const youtubeLeftMenu = document.querySelector('.ytp-left-controls');
	youtubeLeftMenu.appendChild(injectElementBtn);
})();
