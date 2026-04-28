(function () {
  var storageKey = 'language';
  var defaultLanguage = 'en';

  function getStoredLanguage() {
    try {
      return localStorage.getItem(storageKey) === 'zh' ? 'zh' : defaultLanguage;
    } catch (e) {
      return defaultLanguage;
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch (e) {
      // Ignore storage failures; the current page still switches language.
    }
  }

  function updateToggle(language) {
    var label = document.getElementById('language-toggle-label');
    var toggle = document.querySelector('#language-toggle a');

    if (label) {
      label.textContent = language === 'zh' ? 'EN' : '中文';
    }

    if (toggle) {
      toggle.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
      toggle.setAttribute('title', language === 'zh' ? 'Switch to English' : '切换到中文');
    }
  }

  function setLanguage(language) {
    var nextLanguage = language === 'zh' ? 'zh' : defaultLanguage;

    document.documentElement.setAttribute('data-lang', nextLanguage);
    document.documentElement.setAttribute('lang', nextLanguage === 'zh' ? 'zh-CN' : 'en');
    storeLanguage(nextLanguage);
    updateToggle(nextLanguage);
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLanguage(getStoredLanguage());

    var toggle = document.querySelector('#language-toggle a');
    if (!toggle) {
      return;
    }

    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var currentLanguage = document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : defaultLanguage;
      setLanguage(currentLanguage === 'zh' ? defaultLanguage : 'zh');
    });
  });
})();
