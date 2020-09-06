
import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  inputFieldWrapper: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginBottom: '1rem'
  },
  inputField: {
    marginBottom: '2rem',
    width: '30%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  searchOptions: {
    display: 'flex',
    flexDirection: 'row'
  },
  searchOptionsTitle: {
    marginTop: '0.6rem',
    marginRight: '0.5rem'
  },
  radioGroup: {
    display: 'flex'
  },
  searchWrapper: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex'
  }
}))

const EnhancedSearch = ({
  searchPlaceholder,
  searchOptionsTitle,
  searchOptions = [],
  onSearch,
  selectedSearchOption,
  handleRadioButtonSelect
}) => {
  const classes = useStyles()
  const [searchText, setSearchText] = useState('')
  return (
    <div>
      <Paper component="form" className={classes.inputFieldWrapper}>
        <InputBase
          className={classes.input}
          onChange={(evt) => setSearchText(evt.target.value)}
          value={searchText}
          placeholder={searchPlaceholder}
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton
          className={classes.iconButton}
          onClick={() => onSearch(searchText)}
          aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {
        searchOptions.length > 0 &&
        <FormControl className={classes.searchOptions} component="fieldset">
          <span className={classes.searchOptionsTitle}>{searchOptionsTitle}</span>
          <RadioGroup
            aria-label="searchOption"
            name="searchOption"
            className={classes.radioGroup}
            value={selectedSearchOption}
            row
            onChange={handleRadioButtonSelect}>
            {
              searchOptions.map((item, index) => {
                return (
                  <div key={index}>
                    <FormControlLabel value={item} control={<Radio />} label={item} />
                  </div>
                )
              })
            }
            <FormControlLabel value="all" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>
      }
    </div>
  )
}

export default EnhancedSearch
