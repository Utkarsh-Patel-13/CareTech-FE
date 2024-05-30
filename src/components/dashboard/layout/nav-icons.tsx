import {
    AccountCircle,
    type SvgIconComponent,
    Group,
    Home,
    QuestionAnswer,
    Info,
} from "@mui/icons-material";

export const navIcons = {
    "chart-pie": AccountCircle,
    "gear-six": AccountCircle,
    "plugs-connected": AccountCircle,
    "x-square": AccountCircle,
    user: AccountCircle,
    users: Group,
    home: Home,
    faq: QuestionAnswer,
    info: Info,
} as Record<string, SvgIconComponent>;
