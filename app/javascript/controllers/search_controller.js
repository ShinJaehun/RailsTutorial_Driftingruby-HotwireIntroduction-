import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  connect() {
    console.log("JS ready!")
    this.element.setAttribute("data-action", "keyup->search#search")
  }
  search(){
    //오~ JS에서 Params 만드는 방법입니다요!!
    let params = new URLSearchParams()
    params.append("query", this.element.value)
    //console.log(this.element.value)
    //console.log(params)
    fetch(`/?${params}`,{
      method:"GET",
      headers:{
        Accept:"text/vnd.turbo-stream.html" //이게 멀까?
      }
    })
    .then(r=>r.text())
    .then(html=>Turbo.renderStreamMessage(html))
  }
}
