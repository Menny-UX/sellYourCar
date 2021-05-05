import React, { useState , useEffect} from 'react'
import './style.css'

import { Button } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { useFormik, } from "formik"
import * as Yup from "yup"

import { useTranslation } from 'react-i18next'

const Form = () => {
    const { t, i18n } = useTranslation();
    const [globalError, setGlobalError] = useState(false);

    const handleglobalError = ()=>{
        if( 
            formik.errors.car_make &&
            formik.errors.car_model &&
            formik.errors.name &&
            formik.errors.phone 
        ){
            setGlobalError(true)
        }
    }
   
    const formik = useFormik({
        initialValues: {
          car_make: "",
          car_model: "",
          name: "",
          phone: ""
        },
        validationSchema: Yup.object({
            car_make: Yup.string()
            .required(t('form-validate-input01')),
            car_model: Yup.string()
            .required(t('form-validate-input02')),
            name: Yup.string()
            .required(t('form-validate-input03')),
            phone: Yup
            .number(t('form-validate-input04-01'))
            .required(t('form-validate-input04-02')),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));  
        },
      });

    useEffect(() => {
        if( 
            formik.submitCount > 0 &&
            !formik.values.car_make &&
            !formik.values.car_model &&
            !formik.values.name &&
            !formik.values.phone 
        ){
            setGlobalError(true)
        }
        else{
            setGlobalError(false)
        }
    }, [formik.submitCount])

    useEffect(() => {
        if( 
            globalError
        ){
            setGlobalError(false)
        }
    }, [formik.values])

    return ( 
    <form className="form-container" onSubmit={formik.handleSubmit}>
       {
           globalError &&
           (<h4 className="global-error">
                {t('form-validate-global')}
           </h4>)
       }
       <h3 className="form-subsec">
           {t('form-subTitle01')}
       </h3>
       <div className="formControl">
          <label>{t('form-label01')}</label>
          <select
            type="text"
            name="car_make"
            value={formik.values.car_make}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            className={formik.errors.car_make && formik.touched.car_make && "invalid"}
          >
           <option value="0">Select Brand:</option>
            <option value="1">Tessla</option>
            <option value="2">BMW</option>
            <option value="3">Mini Cooper</option>
            <option value="4">Ford</option>
            <option value="5">Mercedes</option>
          </select>
          {globalError || formik.errors.car_make && formik.touched.car_make && (
            <p className="field-error">{formik.errors.car_make}</p>
          )}
        </div>
        <div className="formControl">
          <label>{t('form-label02')}</label>
          <select
            type="text"
            name="car_model"
            value={formik.car_model}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            className={formik.errors.car_model && formik.touched.car_model && "invalid"}
          >
           <option value="0">Select Model:</option>
            <option value="1">Model 1</option>
            <option value="2">Model 2</option>
            <option value="3">Model 3</option>
          </select>
            {globalError || formik.errors.car_model && formik.touched.car_model && (
            <p className="field-error">{formik.errors.car_model}</p>
          )}
        </div>
        <h3 className="form-subsec">
            {t('form-subTitle02')}
       </h3>
        <div className="formControl">
          <label>{t('form-label03')}</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={formik.errors.name && formik.touched.name && "invalid"}
          />
        {globalError || formik.errors.name && formik.touched.name && (
            <p className="field-error">{formik.errors.name}</p>
          )}
        </div>
        <div className="formControl">
          <label>{t('form-label04')}</label>
          <input
            type="text"
            name="phone"
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
            className={formik.errors.phone && formik.touched.phone && "invalid"}
          />
            {globalError || formik.errors.phone && formik.touched.phone && (
            <p className="field-error">{formik.errors.phone}</p>
          )}
        </div>
        <Button type="submit"
        variant="contained"
        size="large" color="primary"
        className="form-btn"
        >
            {t('form-btn')}
        <ChevronRightIcon fontSize="large"/>
        </Button>
        </form>
    );
}
 
export default Form;