import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import firebase from 'firebase'



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function AdminDashboard() {
    const [needy, setNeedy] = useState([])

    const [isModal, setIsModal] = useState(false)
    const onCloseModal = (boolean) => {
        setIsModal(boolean)
        console.log('boolean', boolean)
    }
    const getData = () => {
        firebase.firestore().collection('user').onSnapshot((querySnapshot) => {
            setNeedy([]);
            querySnapshot.forEach((doc) => {
                if (doc.data()?.role !== 'admin') {
                    console.log(doc.data()?.userUID)
                    firebase.firestore().collection('user').doc(doc.data()?.userUID).collection('details').onSnapshot((querySnapshot2) => {
                        querySnapshot2.forEach(doc2 => {
                            setNeedy(needy => [...needy, doc2.data()]);

                            console.log('doc2.data()', doc2.data())
                        })
                    });
                    // setNeedy(needy => [...needy, doc.data()]);
                    console.log(doc.data())
                }

                // products.push(doc.data())
                // console.log("needy" , needy)

            });
        });
    }

    useEffect(() => {
        getData()
    }, [])
    // const bookings = [
    //     {
    //         sn: '1',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'wedding',
    //         message: 'Come soon',
    //         status: 'Pending',

    //     },
    //     {
    //         sn: '2',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'wedding',
    //         message: 'Come soon',
    //         status: 'Pending',


    //     },
    //     {
    //         sn: '3',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'party',
    //         message: 'Come soon',
    //         status: 'Complete',


    //     },
    //     {
    //         sn: '4',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'wedding',
    //         message: 'Come soon',
    //         status: 'Pending',


    //     },
    //     {
    //         sn: '5',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'wedding',
    //         message: 'Come soon',
    //         status: 'Cancel',


    //     },
    //     {
    //         sn: '6',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'wedding',
    //         message: 'Come soon',
    //         status: 'Complete',


    //     },
    //     {
    //         sn: '7',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'wedding',
    //         message: 'Come soon',
    //         status: 'Pending',


    //     },
    //     {
    //         sn: '8',
    //         date: '12/11/2021',
    //         name: 'Noman',
    //         email: 'noman1@yahoo.com',
    //         num: '032223452',
    //         location: 'karachi',
    //         type: 'wedding',
    //         message: 'Come soon',
    //         status: 'Cancel',


    //     }
    // ]

    return (
        <Container maxWidth="100%" className="Booking-list">
            <div className="Booking-list--header">


            </div>

            <TableContainer component={Paper} className="Booking-list--box" >

                <Table aria-label="customized table" >
                    <TableHead >
                        <TableRow className="Booking-list--box--t-head">
                            <StyledTableCell  >#</StyledTableCell>
                            <StyledTableCell  >Name</StyledTableCell>
                            <StyledTableCell>Phone</StyledTableCell>
                            <StyledTableCell >Type</StyledTableCell>
                            <StyledTableCell >Date</StyledTableCell>
                            <StyledTableCell >Status</StyledTableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {needy.map((item, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell>{item.fatherName}</StyledTableCell>
                                <StyledTableCell >{item.branchName}</StyledTableCell>
                                <StyledTableCell >{item.cnicNum}</StyledTableCell>
                                <StyledTableCell >{item.familyMember}</StyledTableCell>
                                <StyledTableCell >{item.monthelyIncome}</StyledTableCell>
                                <StyledTableCell >{item.dateOfBirth}</StyledTableCell>
                                <StyledTableCell >{item.date}</StyledTableCell>

                        



                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>

    );
}