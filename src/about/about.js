export { createDOMElements };
import placeholderImg from '../placeholder.jpg';

function createDOMElements(container){
    // home container
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("top-container");

    // story
    const storyDiv = document.createElement("div");
    storyDiv.classList.add("sub-container");
    const storyContentDiv = document.createElement("div");
    storyContentDiv.classList.add("sub-row-container");
    const storyTextDiv = document.createElement("div");
    storyTextDiv.classList.add("text-container");
    const storyHeader = document.createElement("h2");
    const storyImg = document.createElement("img");
    const storyPara = document.createElement("p");

    storyImg.src = placeholderImg;
    storyImg.height = 240;
    storyHeader.textContent = "The Story";
    storyPara.textContent = `Marco found the space by accident. His grandmother had taught him to make pizza in her tiny kitchen in Naples. After she died, he couldn't bring himself to cook for months. Then one night he made dough just to feel close to her again. His roommate tried it and said it was the best thing he'd ever eaten.
That was two years ago. Now there's a line every night.
`;

    storyTextDiv.appendChild(storyPara);
    storyContentDiv.append(storyImg, storyTextDiv)
    storyDiv.append(storyHeader, storyContentDiv);

    // team
    const teamDiv = document.createElement("div");
    teamDiv.classList.add("sub-container");
    const teamContentDiv = document.createElement("div");
    teamContentDiv.classList.add("sub-row-container");
    const teamTextDiv = document.createElement("div");
    teamTextDiv.classList.add("text-container");
    const teamHeader = document.createElement("h2");
    const teamImg = document.createElement("img");
    const teamPara = document.createElement("p");

    teamImg.src = placeholderImg;
    teamImg.height = 240;
    teamHeader.textContent = "Our Team";
    teamPara.textContent = `Marco runs the oven. His sister knows every regular's order by heart. Thomas hand-crushes the tomatoes and tests each batch of mozzarella. The young cooks watch Marco like he's performing surgery, learning that great pizza takes patience, art, and a lot of love.
    `;

    teamTextDiv.appendChild(teamPara);
    teamContentDiv.append(teamImg, teamTextDiv)
    teamDiv.append(teamHeader, teamContentDiv);

    // append containers
    aboutDiv.append(storyDiv, teamDiv);
    container.appendChild(aboutDiv);
}