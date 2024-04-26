import { calculateInvestmentResults, formatter } from "../util/investment";


export default function Result({input}){
   const results=calculateInvestmentResults(input);
   console.log(results);
   const initialInvestment=results[0].savingsEndOfYear-results[0].interest-results[0].yearlyInvestment;
    return(
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </thead>
            <tbody>
                {results.map((yearData)=>{
                    const totalInterest=yearData.savingsEndOfYear-
                    yearData.yearlyInvestment*yearData.year-initialInvestment;
                    const totalInvestment=yearData.savingsEndOfYear-totalInterest;
                    return(
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalInvestment)}</td>

                        </tr>
                    )
                })}


            </tbody>
        </table>
    )
}
