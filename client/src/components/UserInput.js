

export default function UserInput({OnChange,userInput}){
  
     return(
        <section id="user-input">
            <div className  ="input-group">
                <p>
                    <label>Current Invetment</label>
                    <input type="number" required 
                    value={userInput.currentInvestment}
                    onChange={(event)=>OnChange('currentInvestment',event.target.value)}/>
                </p>
                <p>
                    <label> Yearly Investment</label>
                    <input type="number" required
                    value={userInput.yearlyInvestment}
                    onChange={(event)=>OnChange('yearlyInvestment',event.target.value)}/>
                </p>
            </div>

            <div className  ="input-group">
                <p>
                    <label>Expected Interest(%)</label>
                    <input type="number" required
                    value={userInput.expectedInterest}
                    onChange={(event)=>OnChange('expectedInterest',event.target.value)}/>
                </p>
                <p>
                    <label>Duration(Years)</label>
                    <input type="number" required
                    value={userInput.duration}
                    onChange={(event)=>OnChange('duration',event.target.value)}/>
                </p>

            </div>


        </section>
    )
}