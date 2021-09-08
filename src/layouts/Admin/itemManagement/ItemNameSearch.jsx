import { Formik, useFormik } from 'formik';
import React from 'react'
import { Form, FormControl } from 'react-bootstrap';
import { SearchButton } from '../../../Styles';

export default function ItemNameSearch() {

    const formik = useFormik({
        initialValues: {
          itemName: "",
        },
        onSubmit: (values) => {
          window.location.href = `/admin/itemManagement/${values.itemName}`;
        },
      });


    return (
        <div>
          <div 
          className="d-flex justify-content-center mt-3"
          >
            <Formik>
            <Form onSubmit={formik.handleSubmit} className="d-flex w-100 ms-5">
              <FormControl
                type="search"
                name="itemName"
                placeholder="Ürün ismine göre ara ? "
                aria-label="Search"
                // normalize={(value) => (value || "").toLocaleLowerCase()}
                value={formik.values.itemName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <SearchButton type="submit">Ara</SearchButton>
            </Form>
          </Formik>
          </div>
        </div>
    )
}
