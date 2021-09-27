import React from 'react';
import { useState } from 'react';
import axios from "axios"
import AsyncSelect from "react-select/async"
import { useEffect } from 'react';

function AsyncSelector(props) {

    const [selectOption, setSelectOption] = useState({})


    const customStyling = (theme) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primaryy: "#7367f0",
                primary: 'skyblue',

            },
        }
    }


    const fetchData = (inputValue, call) => {

        console.log(inputValue, "input value")
        setTimeout(() => {
            axios(
                "https://jsonplaceholder.typicode.com/posts/" +
                inputValue, {
                method: "GET"
            })
                .then((data) => {

                    const tempArray = [];

                    if (data) {

                        if (data.data.length) {

                            data.data.map((element) => {

                                tempArray.push({
                                    label: `${element.title}`,
                                    value: element.id,
                                });
                            });
                        } else {
                            console.log("eles")
                            tempArray.push({
                                label: `${data.data.title}`,
                                value: data.id,
                            });
                        }
                    }

                    call(tempArray);
                })
                .catch((error) => {
                    const temp = []
                    temp.push({
                        label: "Undefined",
                        value: "undefined",
                    })
                    call(temp)
                });
        }, 2000);

    };

    const onSearchChange = (selectOption) => {
        if (selectOption) {
            setSelectOption(
                selectOption
            );
        }
    };

    return (
        <React.Fragment>
            <h4>Search Data</h4>
            <AsyncSelect
                value={selectOption}
                // noOptionsMessage={() => "No Course Available by this name :("}
                loadOptions={fetchData}
                onChange={(e) => {
                    onSearchChange(e)
                }}
                defaultOptions={true}
                theme={customStyling}

            />
        </React.Fragment>

    );
}

export default AsyncSelector;