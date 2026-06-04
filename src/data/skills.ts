export interface Skill {
  name: string;
  icon: string;
  iconSvg?: string;
  color: string;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

import javaSvg from "../assets/icons/java.svg";
import javascriptSvg from "../assets/icons/javascript.svg";
import typescriptSvg from "../assets/icons/typescript.svg";
import pythonSvg from "../assets/icons/python.svg";
import cSvg from "../assets/icons/c.svg";
import cppSvg from "../assets/icons/cpp.svg";
import swiftSvg from "../assets/icons/swift.svg";
import reactSvg from "../assets/icons/react.svg";
import flutterSvg from "../assets/icons/flutter.svg";
import cssSvg from "../assets/icons/css.svg";
import tailwindSvg from "../assets/icons/tailwindcss.svg";
import springSvg from "../assets/icons/spring.svg";
import apiSvg from "../assets/icons/api.svg";
import mysqlSvg from "../assets/icons/mysql.svg";
import oracleSvg from "../assets/icons/oracle.svg";
import gitSvg from "../assets/icons/git.svg";
import githubSvg from "../assets/icons/github.svg";
import vscodeSvg from "../assets/icons/vscode.svg";
import visualstudioSvg from "../assets/icons/visualstudio.svg";
import intellijSvg from "../assets/icons/intellijidea.svg";
import eclipseSvg from "../assets/icons/eclipseide.svg";
import xcodeSvg from "../assets/icons/xcode.svg";
import androidstudioSvg from "../assets/icons/androidstudio.svg";
import linuxSvg from "../assets/icons/linux.svg";
import windowsSvg from "../assets/icons/windows.svg";
import figmaSvg from "../assets/icons/figma.svg";
import notionSvg from "../assets/icons/notion.svg";

export const skills: SkillCategory = {
  Languages: [
    { name: "Java", icon: "☕", iconSvg: javaSvg, color: "#007396" },
    { name: "JavaScript", icon: "📜", iconSvg: javascriptSvg, color: "#F7DF1E" },
    { name: "TypeScript", icon: "📘", iconSvg: typescriptSvg, color: "#3178C6" },
    { name: "Python", icon: "🐍", iconSvg: pythonSvg, color: "#3776AB" },
    { name: "C", icon: "⚙️", iconSvg: cSvg, color: "#A8B9CC" },
    { name: "C++", icon: "⚡", iconSvg: cppSvg, color: "#00599C" },
    { name: "Swift", icon: "🦅", iconSvg: swiftSvg, color: "#FA7343" },
  ],
  Frontend: [
    { name: "React", icon: "⚛️", iconSvg: reactSvg, color: "#61DAFB" },
    { name: "React Native", icon: "📱", iconSvg: reactSvg, color: "#61DAFB" },
    { name: "Flutter", icon: "🦋", iconSvg: flutterSvg, color: "#02569B" },
    { name: "CSS", icon: "🎨", iconSvg: cssSvg, color: "#1572B6" },
    { name: "Tailwind CSS", icon: "💨", iconSvg: tailwindSvg, color: "#06B6D4" },
  ],
  Backend: [
    { name: "Spring / Spring Boot", icon: "🍃", iconSvg: springSvg, color: "#6DB33F" },
    { name: "REST API", icon: "🔌", iconSvg: apiSvg, color: "#009688" },
  ],
  Database: [
    { name: "MySQL", icon: "🐬", iconSvg: mysqlSvg, color: "#4479A1" },
    { name: "Oracle", icon: "🔴", iconSvg: oracleSvg, color: "#F80000" },
  ],
  "Dev Tools": [
    { name: "Git", icon: "📦", iconSvg: gitSvg, color: "#F05032" },
    { name: "GitHub", icon: "🐙", iconSvg: githubSvg, color: "#181717" },
    { name: "VS Code", icon: "💻", iconSvg: vscodeSvg, color: "#007ACC" },
    { name: "Visual Studio", icon: "🎯", iconSvg: visualstudioSvg, color: "#5C2D91" },
    { name: "IntelliJ IDEA", icon: "💡", iconSvg: intellijSvg, color: "#000000" },
    { name: "Eclipse IDE", icon: "🌙", iconSvg: eclipseSvg, color: "#2C2255" },
    { name: "Xcode", icon: "🔧", iconSvg: xcodeSvg, color: "#147EFB" },
    { name: "Android Studio", icon: "🤖", iconSvg: androidstudioSvg, color: "#3DDC84" },
  ],
  "OS & Design": [
    { name: "Linux", icon: "🐧", iconSvg: linuxSvg, color: "#FCC624" },
    { name: "Windows", icon: "🪟", iconSvg: windowsSvg, color: "#0078D6" },
    { name: "Figma", icon: "🎨", iconSvg: figmaSvg, color: "#F24E1E" },
    { name: "Notion", icon: "📝", iconSvg: notionSvg, color: "#000000" },
  ],
};
