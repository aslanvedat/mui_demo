import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
            <Table aria-label='simpleelement' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Ip Address</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map(row => (
                            <TableRow key={row.id} sx={{ "&:last-child td,&:last-child th": { border: 0 } }}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align='center'>{row.email}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                                <TableCell>{row.ip_address}</TableCell>

                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}
const tableData = [{
    "id": 1,
    "first_name": "Paulie",
    "last_name": "Jermyn",
    "email": "pjermyn0@unicef.org",
    "gender": "Female",
    "ip_address": "214.251.218.155"
}, {
    "id": 2,
    "first_name": "Giffy",
    "last_name": "Beville",
    "email": "gbeville1@scientificamerican.com",
    "gender": "Male",
    "ip_address": "239.92.225.0"
}, {
    "id": 3,
    "first_name": "Aurelia",
    "last_name": "Muehler",
    "email": "amuehler2@msu.edu",
    "gender": "Genderfluid",
    "ip_address": "42.176.7.73"
}, {
    "id": 4,
    "first_name": "Mira",
    "last_name": "Ravenscroftt",
    "email": "mravenscroftt3@cmu.edu",
    "gender": "Female",
    "ip_address": "71.86.120.101"
}, {
    "id": 5,
    "first_name": "Norean",
    "last_name": "Danihelka",
    "email": "ndanihelka4@java.com",
    "gender": "Female",
    "ip_address": "249.158.58.61"
}, {
    "id": 6,
    "first_name": "Row",
    "last_name": "Langrish",
    "email": "rlangrish5@histats.com",
    "gender": "Female",
    "ip_address": "82.93.235.140"
}, {
    "id": 7,
    "first_name": "Pavlov",
    "last_name": "O'Scannill",
    "email": "poscannill6@a8.net",
    "gender": "Male",
    "ip_address": "82.18.113.245"
}, {
    "id": 8,
    "first_name": "Anita",
    "last_name": "Mack",
    "email": "amack7@hao123.com",
    "gender": "Female",
    "ip_address": "223.192.217.137"
}, {
    "id": 9,
    "first_name": "Hal",
    "last_name": "Biddlestone",
    "email": "hbiddlestone8@intel.com",
    "gender": "Male",
    "ip_address": "209.252.229.130"
}, {
    "id": 10,
    "first_name": "Ianthe",
    "last_name": "Wayne",
    "email": "iwayne9@topsy.com",
    "gender": "Female",
    "ip_address": "238.154.60.174"
}]
