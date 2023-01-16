import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    handleThemeChange: () => void,
    darkMode: boolean
}

export default function({handleThemeChange, darkMode}: Props) {
    
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch onChange={handleThemeChange} checked={darkMode}/>
            </Toolbar>
        </AppBar>
    )
}