import { makeStyles } from "@material-ui/core"
import { customScrollbar } from '../../../styles/materialUi';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "auto",
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 2px 16px 0 rgba(255,23,68,0.08)",
    padding: "24px 16px",
    marginTop: 32,
    marginBottom: 32,
    [theme.breakpoints.down("sm")]: {
      padding: "12px 4px",
      marginTop: 16,
    },
  },
  appBarRoot: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  indicator: {
    backgroundColor: "transparent"
  },
  tapRoot: {
    color: "#fff",
    opacity: 1,
    fontSize: 16,
    "&:hover": {
      fontSize: 18,
    },
    transition: "all .2s"
  },
  selectedTap: {
    marginTop: '50px',
    color: "rgb(238, 130, 59)",
    fontSize: 18,
  },
  noname: {
    '& .MuiBox-root': {
      paddingTop: props => props.isMobile ? 0 : 24,
    }
  },
  detailMovie: {
    fontSize: 14,
  },
  contentTitle: {
    width: "30%",
    fontWeight: 500,
    fontSize: 15,
  },
  contentInfo: {
    width: "70%",
    paddingLeft: 10,
  },

  movieDetail: {
    color: "#e9e9e9"
  },
  danhGia: {
    marginBottom: 15,
  },
  inputRoot: {
    maxWidth: "580px",
    margin: "auto",
    padding: "0",
    position: "relative",
    cursor: "pointer",
    width: "100%",
  },
  avatarReviewer: {
    position: "absolute", top: "20%", left: "3%",
  },
  avatar: {
    display: "inline-block",
    float: "left",
  },
  avatarImg: {
    height: "36px",
    width: "36px",
    borderRadius: "25px",

  },
  inputReviwer: {
    cursor: "pointer",
    padding: "10px 10px 10px 60px",
    width: "100%",
    height: "60px",
    borderRadius: "4px",
    border: "1px solid #e8e8e9",
    background: "#fff",
    color: "#9b9b9b",
    fontSize: "14px",
    "&:focus": {
      outline: "none",
    }
  },
  imgReviewerStar: {
    position: "absolute", top: "50%", right: "3%",
    transform: "translateY(-50%) ",
    display: "flex",
    margin: "auto",
  },

  itemDis: {
    padding: "20px 20px 12px",
    border: "1px solid #e6e6e6",
    borderBottom: "none",
    borderRadius: "3px",
    backgroundColor: "#fff",
    maxWidth: "580px",
    width: "100%",
    margin: "auto",
    color: "#4a4a4a",
    marginBottom: 15,
  },
  infoUser: {
  },
  liveUser: {
    marginLeft: 10,
    display: "inline-block",
  },
  userName: {
    color: "#000",
    fontWeight: 500,
    fontSize: 14,
    textTransform: "capitalize",
  },
  timePost: {
    color: "#9b9b9b",
    fontSize: 12,
  },

  left: {
    float: "left",
  },
  right: {
    textAlign: "center",
    float: "right",
  },
  btnDang: {
    backgroundColor: 'rgb(238, 130, 59)',
    borderColor: 'rgb(238, 130, 59)',
    color: "#fff",
    padding: "7px 25px",
    margin: "0px 0px 7px 0px",
    '&:hover': {
      backgroundColor: 'rgb(238, 130, 59)',
      borderColor: 'rgb(238, 130, 59)',
    },
  },

  textField: {
    '& .MuiInputLabel-root': {
      transform: "translate(18px, 29px) scale(1)",
      color: "#4a4a4a",
      right: 18,
      top: props => props.isMobile ? -15 : 0,
    },
    '& label.Mui-focused': {
      display: "none",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'purple',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        top: 0,
        '& legend': {
          display: "none"
        },
      },
      '&:hover fieldset': {
        borderColor: "rgba(0, 0, 0, 0.23)",
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(238, 130, 59)',
        boxShadow: "inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(251 66 38 / 60%)",
        borderWidth: 1,

      },
      '& input': {
        padding: props => props.isMobile ? "20px 20px" : "30px 20px",
      }
    },
  },
  starPopup: {
    fontSize: props => props.isMobile ? 27 : 40,
  },
  pointPopup: {
    color: "#7ed321",
    fontSize: props => props.isMobile ? 27 : 40,
  },
  dialog: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        ...customScrollbar
      }
    }
  },
  rootcloseButton: {
    margin: 0,
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  moreMovie: {
    margin: "30px auto",
    textAlign: "center",
    display: props => props.hideBtn ? "none" : "block",
  },
  moreMovieButton: {
    color: "#949494",
    borderColor: "#949494",
    padding: "7px 25px",
    backgroundColor: "transparent",
    '&:hover': {
      backgroundColor: "rgb(238, 130, 59)",
      borderColor: "rgb(238, 130, 59)",
      color: "#fff",
    },
    "@media (hover: none)": {
      '&:hover': {
        color: "#949494",
        borderColor: "#949494",
        backgroundColor: "transparent",
      }
    },
  },
  tabList: {
    display: "flex",
    gap: 12,
    marginBottom: 18,
    overflowX: "auto",
    paddingBottom: 8,
  },
  tabItem: {
    background: "#fff",
    color: "#222",
    borderRadius: 10,
    border: "2px solid #ff8a65",
    padding: "10px 24px",
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
    boxShadow: "0 2px 8px 0 rgba(255,23,68,0.06)",
    "&:hover": {
      background: "#fff0f3",
      color: "#ff1744",
      borderColor: "#ff1744",
      boxShadow: "0 4px 16px 0 rgba(255,23,68,0.12)",
    },
  },
  tabItemActive: {
    background: "#fff0f3",
    color: "#ff1744",
    borderColor: "#ff1744",
    boxShadow: "0 4px 16px 0 rgba(255,23,68,0.15)",
  },
  showtimeList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    marginTop: 10,
  },
  showtimeItem: {
    background: "#fff",
    color: "#222",
    borderRadius: 8,
    border: "1.5px solid #ff8a65",
    padding: "8px 18px",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s",
    boxShadow: "0 2px 8px 0 rgba(255,23,68,0.08)",
    "&:hover": {
      background: "#fff0f3",
      color: "#ff1744",
      borderColor: "#ff1744",
      boxShadow: "0 4px 16px 0 rgba(255,23,68,0.15)",
    },
  },
}))
export default useStyles