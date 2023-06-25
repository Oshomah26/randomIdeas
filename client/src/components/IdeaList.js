class IdeaList {
    constructor(){
        this._ideaListEl = document.querySelector('#idea-list');
        this._ideas = [
           { 
            id: 1,
            text: 'Idea 1',
            tag: 'Business',
            username: 'Jake',
            date: '02/01/2023'
           },

            { 
                id: 2,
                text: 'Idea 2',
                tag: 'Technology',
                username: 'Shane',
                date: '02/01/2023'
            },
        ];
    }

    render() {
        this._ideaListEl.innerHTML = this._ideas.map((idea)  => {
            return `
            <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag tag-technology">${idea.tag}</p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
            `;
        } ).join(``)
    }
}

export default IdeaList;