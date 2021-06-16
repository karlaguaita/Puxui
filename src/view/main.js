import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import theme from '../styles/colors';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import WcIcon from '@material-ui/icons/Wc';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            name: '',
            sex: '',
            age: '',
            score: '',
            data: []
        }
    }

    next(value){
        
        let aux = this.state.data
        if (value == 2 || value == 3 || value == 4)
        {
            aux.push({
                name: this.state.name,
                sex: this.state.sex,
                age: this.state.age,
                score: this.state.score,
            })
            this.setState({
                name: '',
                sex: '',
                age: '',
                score: ''
            })
        }
        this.setState({
            step: value
        })
    }

    setScore(e){
        let value = e.target.value
        if (value> 10)
        {
            value = 10
        }
        if (value < 0)
        {
            value = 0
        }
        this.setState({score: value})
    }

    setAge(e){
        let value = e.target.value
        if (value < 0)
        {
            value = 0
        }
        this.setState({age: value})
    }

    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <Container maxWidth='lg' disableGutters={true}>
                        <Typography component="div"  style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            {
                                this.state.step < 4 &&
                                <Box component="span" m={1} style={{borderStyle: 'solid', borderRadius: 30, borderWidth: '1px', borderColor: 'black', width: '400px', height: '380px'}}>
                                    <Typography variant="h4"  color='primary' gutterBottom style={{width: '100%', textAlign: 'center', fontFamily: 'Droid Sans', color: 'fc657e', marginTop: '10px'}}>
                                        Sistema de calificaciones
                                    </Typography>
                                    {
                                        this.state.step == 0 &&
                                        <Typography gutterBottom style={{width: '90%', textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                                            Instrucciones: Introduce 3 calificaciones para continuar con el proceso:
                                        </Typography>
                                    }
                                    {
                                        this.state.step >0 &&
                                        <Typography gutterBottom style={{width: '90%', textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                                            Datos del estudiante número {this.state.step}
                                        </Typography>
                                    }
                                    {
                                        this.state.step == 0 &&
                                        <view>
                                            <Box textAlign='center' style={{marginTop:"110px"}}>
                                                <Button variant="contained" color="secondary" onClick={() => this.next(1)}>
                                                    Iniciar
                                                </Button>
                                            </Box>
                                        </view>
                                        
                                    }
                                    {
                                        this.state.step == 1 &&
                                        <view>
                                            <FormControl required style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Nombre del primer estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    required
                                                    style={{width: '80%'}} 
                                                    autoFocus={true}
                                                    required={true}
                                                    color="secondary"
                                                    placeholder="Nombre del primer estudiante"
                                                    onChange={(e) => this.setState({name: e.target.value})}
                                                    value={this.state.name}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Sexo del primer estudiante</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={this.state.sex}
                                                    style={{width: '80%'}} 
                                                    placeholder="Sexo del primer estudiante"
                                                    onChange={(e) => this.setState({sex: e.target.value})}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <WcIcon />
                                                        </InputAdornment>
                                                    }
                                                >
                                                    <MenuItem value={'Femenino'}>Femenino</MenuItem>
                                                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Edad del primer estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    style={{width: '80%'}} 
                                                    required={true}
                                                    type="number"
                                                    color="secondary"
                                                    placeholder="Edad del primer estudiante"
                                                    onChange={(e) => this.setAge(e)}
                                                    value={this.state.age}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PermContactCalendarIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Nota del primer estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    style={{width: '80%'}} 
                                                    required={true}
                                                    color="secondary"
                                                    type="number"
                                                    placeholder="Nota del primer estudiante"
                                                    onChange={(e) => this.setScore(e)}
                                                    value={this.state.score}
                                                    InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PlaylistAddCheckIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Box textAlign='center' style={{marginTop:"20px"}}>
                                                <Button variant="contained" color="secondary" onClick={() => this.next(2)}>
                                                    Siguiente
                                                </Button>
                                            </Box>
                                        </view>
                                    }
                                    {
                                        this.state.step == 2 &&
                                        <view>
                                            <FormControl required style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Nombre del segundo estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    required
                                                    style={{width: '80%'}} 
                                                    autoFocus={true}
                                                    required={true}
                                                    color="secondary"
                                                    placeholder="Nombre del segundo estudiante"
                                                    onChange={(e) => this.setState({name: e.target.value})}
                                                    value={this.state.name}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Sexo del segundo estudiante</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={this.state.sex}
                                                    style={{width: '80%'}} 
                                                    placeholder="Sexo del segundo estudiante"
                                                    onChange={(e) => this.setState({sex: e.target.value})}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <WcIcon />
                                                        </InputAdornment>
                                                    }
                                                >
                                                    <MenuItem value={'Femenino'}>Femenino</MenuItem>
                                                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Edad del segundo estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    style={{width: '80%'}} 
                                                    required={true}
                                                    type="number"
                                                    color="secondary"
                                                    placeholder="Edad del segundo estudiante"
                                                    onChange={(e) => this.setAge(e)}
                                                    value={this.state.age}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PermContactCalendarIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Nota del segundo estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    style={{width: '80%'}} 
                                                    required={true}
                                                    color="secondary"
                                                    type="number"
                                                    placeholder="Nota del segundo estudiante"
                                                    onChange={(e) => this.setScore(e)}
                                                    value={this.state.score}
                                                    InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PlaylistAddCheckIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Box textAlign='center' style={{marginTop:"20px"}}>
                                                <Button variant="contained" color="secondary" onClick={() => this.next(3)}>
                                                    Siguiente
                                                </Button>
                                            </Box>
                                        </view>
                                    }
                                    {
                                        this.state.step == 3 &&
                                        <view>
                                            <FormControl required style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Nombre del tercer estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    required
                                                    style={{width: '80%'}} 
                                                    autoFocus={true}
                                                    required={true}
                                                    color="secondary"
                                                    placeholder="Nombre del tercer estudiante"
                                                    onChange={(e) => this.setState({name: e.target.value})}
                                                    value={this.state.name}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Sexo del tercer estudiante</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={this.state.sex}
                                                    style={{width: '80%'}} 
                                                    placeholder="Sexo del tercer estudiante"
                                                    onChange={(e) => this.setState({sex: e.target.value})}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <WcIcon />
                                                        </InputAdornment>
                                                    }
                                                >
                                                    <MenuItem value={'Femenino'}>Femenino</MenuItem>
                                                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Edad del tercer estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    style={{width: '80%'}} 
                                                    required={true}
                                                    type="number"
                                                    color="secondary"
                                                    placeholder="Edad del tercer estudiante"
                                                    onChange={(e) => this.setAge(e)}
                                                    value={this.state.age}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PermContactCalendarIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <FormControl style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: '10px'}} justify="center">
                                                <InputLabel htmlFor="input-with-icon-adornment" color="secondary" style={{marginLeft: '10%'}}>Nota del tercer estudiante</InputLabel>
                                                <Input
                                                    id="input-with-icon-adornment"
                                                    style={{width: '80%'}} 
                                                    required={true}
                                                    color="secondary"
                                                    type="number"
                                                    placeholder="Nota del tercer estudiante"
                                                    onChange={(e) => this.setScore(e)}
                                                    value={this.state.score}
                                                    InputProps={{ inputProps: { min: "0", max: "10", step: "1" } }}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <PlaylistAddCheckIcon />
                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                            <Box textAlign='center' style={{marginTop:"20px"}}>
                                                <Button variant="contained" color="secondary" onClick={() => this.next(4)}>
                                                    Guardar
                                                </Button>
                                            </Box>
                                        </view>
                                    }                            
                                </Box>
                            }
                            {
                                this.state.step == 4 &&
                                <view>
                                    <Typography gutterBottom style={{width: '90%', textAlign: 'center', marginLeft: '5%', marginRight: '5%'}}>
                                        RESULTADOS
                                    </Typography>
                                    <TableContainer component={Paper}>
                                        <Table size="small" aria-label="a dense table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Nombre del estudiante</TableCell>
                                                    <TableCell align="right">Sexo</TableCell>
                                                    <TableCell align="right">Edad</TableCell>
                                                    <TableCell align="right">Calificación</TableCell>
                                                    <TableCell align="right">Estado</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {this.state.data.map((row) => (
                                                    <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.sex}</TableCell>
                                                    <TableCell align="right">{row.age}</TableCell>
                                                    <TableCell align="right">{row.score}</TableCell>
                                                    <TableCell align="right">{row.score>4? 'Aprobado': 'Reprobado'}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Box textAlign='center' style={{marginTop:"20px"}}>
                                        <Button variant="contained" color="secondary" onClick={() => this.next(0)}>
                                            Regresar
                                        </Button>
                                    </Box>
                                </view>
                            }
                        </Typography>
                    </Container>
                </MuiThemeProvider>
            </React.Fragment>
        )
        
    }
}

export default Login