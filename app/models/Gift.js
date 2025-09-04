import { AppState } from "../AppState.js"



export class gift {
    constructor(data) {

        this.tag = data.tag
        this.url = data.url

    }

    get giftTemplate() {

        return `
        
        

          <div class="col-md-4">
            <div class="card">
              <div id="card-image" class="card-body">

                <img class="img-fluid" src="${this.url}">
              </div>

              <div id="class-tag" class="card-footer">

                <p> ${this.tag}</p>
              </div>

            </div>
          </div>
        </div>

`
    }

}