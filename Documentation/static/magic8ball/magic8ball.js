const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code')
var userstories = JSON.parse(userstory);

window.onload = function() {
    document.title = userstories[code]["title"];
    var title = document.getElementById('title');
    title.innerHTML = userstories[code]["title"];
    var description = document.getElementById('description');
    description.innerHTML = userstories[code]["description"];
    var acceptanceCriteria = document.getElementById('acceptance-criteria');
    acceptanceCriteria.innerHTML = userstories[code]["acceptanceCriteria"];
};