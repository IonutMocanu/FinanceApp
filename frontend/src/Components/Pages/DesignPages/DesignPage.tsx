import React from 'react'
import Table from '../../Table/Table'
import RatioList from '../../RatioList/RatioList'
import { CompanyKeyMetrics } from '../../../company'
import { testIncomeStatementData } from '../../Table/TestData'

interface Props {

}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Total valuea of all a company's shares of stock"
  }
]

const DesignPage = (props: Props) => {
  return (
    <>
        <h1>Finshark Design Page</h1>
        <h2>This is a design page. This is where we well houses various design aspects of the app.</h2>

        <RatioList data={testIncomeStatementData} config={tableConfig}/>

        <Table />
    </>
  )
}

export default DesignPage