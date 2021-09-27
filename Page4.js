
import React, { useState } from 'react';
import ReactTable from "react-table"
import "react-table/react-table.css"
import { Card, CardHeader, CardBody, CardTitle, Input } from 'reactstrap';


function Page4(props) {

    const data = [
        { course: "Java", duration: '2 months' },
        { course: "React", duration: '1.5 months' },
        { course: "JS", duration: '3 months' },
        { course: "AWS", duration: '2 months' },
        { course: "Python", duration: '3 months' },

    ]

    const [courseData, setCourseData] = useState(data)
    const [searchKey, setSearchKey] = useState('')
    const columns = [{
        Header: 'Course',
        accessor: 'course'
    }, {
        Header: 'Duration',
        accessor: 'duration'
    }]


    const handleChange = (e) => {
        console.log(e.target.value)
        let targetValue = e.target.value
        setSearchKey(targetValue)
        // const filteredCourseData =

        // console.log(filteredCourseData)

        // setCourseData(filteredCourseData)

    }

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Table</CardTitle>
                    <Input onChange={(e) => handleChange(e)} placeholder="Search course here..." />
                </CardHeader>
                <CardBody>
                    <ReactTable
                        data={data.filter(i =>
                            i.course.toLowerCase().includes(searchKey.toLowerCase())
                        )}
                        columns={columns}
                        defaultPageSize={courseData.length}
                        pageSizeOptions={[2, 4, 6]}
                        showPaginationBottom={data.length > 10 ? true : false}
                    />
                </CardBody>
            </Card>
        </div>
    );
}

export default Page4;