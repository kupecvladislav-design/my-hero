const intellectButton = document.querySelector("#intellect-button");
const intellectPanel = document.querySelector("#intellect-panel");

const heroProgress = document.querySelector("#hero-progress");
const englishProgress = document.querySelector("#english-progress");
const englishProgressBar = document.querySelector("#english-progress-bar");
const completeQuestButton = document.querySelector("#complete-quest-button");
const questStatus = document.querySelector("#quest-status");

const questStorageKey = "my-hero.english-first-quest";
const questReward = 25;

let questCompleted = localStorage.getItem(questStorageKey) === "completed";

function updateProgress() {
    const experience = questCompleted ? questReward : 0;

    heroProgress.textContent = `Рівень 1 · Досвід ${experience} / 100`;
    englishProgress.textContent =
        `Рівень навички 1 · Досвід ${experience} / 100`;

    englishProgressBar.value = experience;
    englishProgressBar.textContent = `${experience} зі 100`;

    completeQuestButton.disabled = questCompleted;
    completeQuestButton.textContent = questCompleted
        ? "Квест завершено ✓"
        : "Квест виконано";

    questStatus.textContent = questCompleted
        ? "Ти отримав 25 досвіду для англійської та свого героя."
        : "";
}

intellectButton.addEventListener("click", () => {
    intellectPanel.hidden = !intellectPanel.hidden;

    intellectButton.setAttribute(
        "aria-expanded",
        String(!intellectPanel.hidden)
    );
});

completeQuestButton.addEventListener("click", () => {
    if (questCompleted) {
        return;
    }

    questCompleted = true;
    localStorage.setItem(questStorageKey, "completed");
    updateProgress();
});

updateProgress();