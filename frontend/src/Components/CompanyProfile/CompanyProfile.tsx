import React, { useEffect, useState } from 'react'
import { CompanyKeyMetrics } from '../../company';
import { useOutletContext } from 'react-router';
import { getKeyMetrics } from '../../api';
import RatioList from '../RatioList/RatioList';

interface Props {

}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
];


const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics >();
  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      // 1. Verificăm dacă avem un ticker valid înainte să sunăm la API
      if (!ticker) return; 
      
      try {
        const value = await getKeyMetrics(ticker);
        
        // 2. Debugging: Vezi în consolă ce primești de la API
        console.log("Date primite pentru", ticker, ":", value);

        // Verificăm dacă avem date în array
        if(value?.data && value.data.length > 0) {
            setCompanyData(value.data[0]);
        } else {
            console.warn("API-ul a returnat o listă goală!");
        }
      } catch (error) {
        console.error("Eroare la fetch:", error);
      }
    };

    getCompanyKeyMetrics();
  }, [ticker]); // <--- AM ADĂUGAT ticker AICI
  return <>
    {companyData ? (
      <>
        <RatioList data={[companyData]} config={tableConfig}/>
      </>
    ) : (
      <>
        Loading...
      </>
    ) }
  </>
}

export default CompanyProfile