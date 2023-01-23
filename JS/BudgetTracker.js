export default class BudgetTracker {
    constructor(querySelectorString){
        this.root = document.querySelector(querySelectorString);
        this.root.innerHTML = BudgetTracker.html();
  
  
        this.root.querySelector(".new-entry").addEventListener("click", () => {
          this.onNewEntryBtnClick();
      });
      console.log("button clicked");
  
        //This loads initail data from storage
        this.load();
    }
  
    static html() {
      return `
      <table class="budget-tracker">
          <thead>
              <tr>
                  <th>Dates</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th></th>
              </tr>
          </thead>
          <tbody class="entries"></tbody>
          <tbody>
              <tr>
                  <td colspan="5" class="controls">
                      <button type="button" class="new-button entry">New Entry</button>
                  </td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td colspan="5" class="summary">
                      <strong>Total:</strong>
                       <span class="total">R0.00</span>
                  </td>
              </tr>
          </tfoot>
      </table>
      `;
  
    }
  
    static entryHtml() {
      return `
      <tr>
           <td>
          <input class="input input-date" type="date">
           </td>
      <td>
          <input class="input input-description" type="text" placeholder="Ädd a description {bills, etc}">
      </td>
      <td>
        <select class="input input-type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
        </select>
      </td>
      <td>
          <input class="input input-amount" type="number">
      </td>
  
         <td>
          <button class="delete-entry" type="button">&#10005;</button>
          </td>
  </tr>
      `;
      
    }
  
     load(){
         const entries = JSON.parse(localStorage.getItem("budget-tracker-entries-dev") || "[]");
         console.log(this.entries);
         for (const entry of entries) {
          this.addEntry(entry);
          
         }
         this.updateSummary();
     }
  
     updateSummary(){
  
     }
  
  
     save(){
  
     }
     //This should create a new entry
  
     addEntry(entry = {}){
      this.root.querySelector(".entries").insertAdjacentHTML("beforeend", BudgetTracker.entryHtml());
  
          const row = this.root.querySelector(".entries tr:last-of-type");
  
          row.querySelector(".input-date").value = entry.date || new Date().toISOString().replace(/T.*/, "");
          row.querySelector(".input-description").value = entry.description || "";
          row.querySelector(".input-type").value = entry.type || "income";
          row.querySelector(".input-amount").value = entry.amount || 0;
          row.querySelector(".delete-entry").addEventListener("click", e => {
              this.onDeleteEntryBtnClick(e);
          });
  
          row.querySelectorAll(".input").forEach(input => {
              input.addEventListener("change", () => this.save());
          });
     }
  
     getEntryRows(){
  
     }
  
     onNewEntryBtnClick(){
       this.addEntry();
     }
  
  
     onDeleteEntryBtnClick(e){
  
     }
  }