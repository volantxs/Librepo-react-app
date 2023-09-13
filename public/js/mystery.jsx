const node = document.createElement("div");
const mystery_html = 
     // <!-- vault begins here -->
    <div class="row me-5 ms-5 g-3 p-3 justify-content-center text-center"   >
      <div class="col-md-2 box p-2 m-3" name="1">
        <kbd>XP|700</kbd> Gillian Flynn 
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/41wjnFxdxnL.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="1" onclick="getXP(this.id)" value="464" name="crime">Gone Girl</button>
        </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|500</kbd> Keigo Higashino
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/513UDubStkL.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="2" onclick="getXP(this.id)" value="352" name="crime">The Devotion of Suspect X</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|800</kbd> Frederick Forsyth
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/71exL21lNrL._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="3" onclick="getXP(this.id)" aria-valuenow="450">The Day 0f the Jackal</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|900</kbd> Michael Crichton
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/71em2HBF1gL._AC_UF1000,1000_QL80_.jpg" style="width: auto; height: 160px ;"/>
        <button class="btn btn-book" id="4" onclick="getXP(this.id)" aria-valuenow="450">Timeline</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|550</kbd> Michael Crichton
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/51vM37sPNWL._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="5" onclick="getXP(this.id)" aria-valuenow="450">Sphere</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|450</kbd> Ken Follett
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/71UdMJ7um0L._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="6" onclick="getXP(this.id)" aria-valuenow="450">Eye of the Needle</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|450</kbd>  Umberto Eco
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/819SFV6rfRL._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="7" onclick="getXP(this.id)" aria-valuenow="450">The Name of the Rose</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|750</kbd> Umberto Eco
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/71pPtZRx6qL._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="8" onclick="getXP(this.id)" aria-valuenow="450">The Prague Cemetery</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|300</kbd> Gillian Flynn
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/71PEVpZOtDL._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="8" onclick="getXP(this.id)" aria-valuenow="450">Sharp Objects</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|500</kbd>  Terry Hayes
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/51bJXQkf2UL.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="8" onclick="getXP(this.id)" aria-valuenow="450">I am Pilgrim</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|650</kbd> Jack Carr
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/71chOXyr66L._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="8" onclick="getXP(this.id)" aria-valuenow="450">The Terminal List</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|500</kbd> Alfred Lansing
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/81JeZ8MnaqL._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="8" onclick="getXP(this.id)" aria-valuenow="450">Endurance</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|800</kbd> Blake Crouch
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/81X6jSuxZ1L._AC_UF1000,1000_QL80_.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="8" onclick="getXP(this.id)" aria-valuenow="450">Dark Matter</button>
      </div>
      <div class="col-md-2 box p-2 m-3">
        <kbd>XP|600</kbd> Patricia Highsmith
        <img class="img-fluid mx-auto d-block rounded m-3 img-shadow" src="https://m.media-amazon.com/images/I/518YQQJO6FL.jpg" style="max-width: 100px;"/>
        <button class="btn btn-book" id="8" onclick="getXP(this.id)" aria-valuenow="450">The Talented Mr.Ripley</button>
      </div>
    </div>

const mystery_page = document.createTextNode(mystery_html)

node.appendChild(mystery_page);
document.getElementById("mystery").appendChild(node);