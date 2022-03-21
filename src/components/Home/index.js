import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BulletButton from "../utilities/BulletButton";
import CopyButton from "./CopyButton";
import "./index.css";
const BreakPoints = {
  xl: 1699,
  lg: 1199,
  md: 991,
  sm: 767,
  xl: 576,
};

const Home = (props) => {
  const location = useLocation();
  const downloadUrls = [
    {
      device: "android",
      img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1NTMuMDQ4IDU1My4wNDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxzY3JpcHQvPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTc2Ljc3NCwxNzkuMTQxYy05LjUyOSwwLTE3LjYxNCwzLjMyMy0yNC4yNiw5Ljk2OWMtNi42NDYsNi42NDYtOS45NywxNC42MjEtOS45NywyMy45Mjl2MTQyLjkxNCAgICBjMCw5LjU0MSwzLjMyMywxNy42MTksOS45NywyNC4yNjZjNi42NDYsNi42NDYsMTQuNzMxLDkuOTcsMjQuMjYsOS45N2M5LjUyMiwwLDE3LjU1OC0zLjMyMywyNC4xMDEtOS45NyAgICBjNi41My02LjY0Niw5LjgwNC0xNC43MjUsOS44MDQtMjQuMjY2VjIxMy4wMzljMC05LjMwOS0zLjMyMy0xNy4yODMtOS45Ny0yMy45MjlDOTQuMDYyLDE4Mi40NjQsODYuMDgyLDE3OS4xNDEsNzYuNzc0LDE3OS4xNDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+CgkJPHBhdGggZD0iTTM1MS45NzIsNTAuODQ3TDM3NS41Nyw3LjMxNWMxLjU0OS0yLjg4MiwwLjk5OC01LjA5Mi0xLjY1OC02LjY0NmMtMi44ODMtMS4zNC01LjA5OC0wLjY2MS02LjY0NiwxLjk4OWwtMjMuOTI4LDQzLjg4ICAgIGMtMjEuMDU1LTkuMzA5LTQzLjMyNC0xMy45NzItNjYuODA3LTEzLjk3MmMtMjMuNDg4LDAtNDUuNzU5LDQuNjY0LTY2LjgwNiwxMy45NzJsLTIzLjkyOS00My44OCAgICBjLTEuNTU1LTIuNjUtMy43Ny0zLjMyMy02LjY0Ni0xLjk4OWMtMi42NjIsMS41NjEtMy4yMTMsMy43NjQtMS42NTgsNi42NDZsMjMuNTk5LDQzLjUzMiAgICBjLTIzLjkyOSwxMi4yMDMtNDIuOTg3LDI5LjE5OC01Ny4xNjcsNTEuMDIyYy0xNC4xOCwyMS44MzYtMjEuMjczLDQ1LjY5OC0yMS4yNzMsNzEuNjI4aDMwNy40MjYgICAgYzAtMjUuOTI0LTcuMDk0LTQ5Ljc4Ny0yMS4yNzMtNzEuNjI4QzM5NC42MjMsODAuMDQ1LDM3NS42NzUsNjMuMDUsMzUxLjk3Miw1MC44NDd6IE0yMTUuNTM5LDExNC4xNjUgICAgYy0yLjU1MiwyLjU1OC01LjYsMy44MzEtOS4xNDMsMy44MzFjLTMuNTUsMC02LjUzNi0xLjI3My04Ljk3Mi0zLjgzMWMtMi40MzYtMi41NDYtMy42NTQtNS41ODItMy42NTQtOS4xMzcgICAgYzAtMy41NDMsMS4yMTgtNi41ODUsMy42NTQtOS4xMzdjMi40MzYtMi41NDYsNS40MjktMy44MTksOC45NzItMy44MTlzNi41OTEsMS4yNzMsOS4xNDMsMy44MTkgICAgYzIuNTQ2LDIuNTU4LDMuODI1LDUuNTk0LDMuODI1LDkuMTM3QzIxOS4zNTcsMTA4LjU3NywyMTguMDc5LDExMS42MTksMjE1LjUzOSwxMTQuMTY1eiBNMzU1LjYyNSwxMTQuMTY1ICAgIGMtMi40NDEsMi41NTgtNS40MzQsMy44MzEtOC45NzEsMy44MzFjLTMuNTUxLDAtNi41OTgtMS4yNzMtOS4xNDUtMy44MzFjLTIuNTUxLTIuNTQ2LTMuODI0LTUuNTgyLTMuODI0LTkuMTM3ICAgIGMwLTMuNTQzLDEuMjczLTYuNTg1LDMuODI0LTkuMTM3YzIuNTQ3LTIuNTQ2LDUuNTk0LTMuODE5LDkuMTQ1LTMuODE5YzMuNTQzLDAsNi41MjksMS4yNzMsOC45NzEsMy44MTkgICAgYzIuNDM4LDIuNTU4LDMuNjU0LDUuNTk0LDMuNjU0LDkuMTM3QzM1OS4yNzksMTA4LjU3NywzNTguMDYyLDExMS42MTksMzU1LjYyNSwxMTQuMTY1eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPgoJCTxwYXRoIGQ9Ik0xMjMuOTcxLDQwNi44MDRjMCwxMC4yMDIsMy41NDMsMTguODM4LDEwLjYzLDI1LjkyNWM3LjA5Myw3LjA4NywxNS43MjksMTAuNjMsMjUuOTI0LDEwLjYzaDI0LjU5NmwwLjMzNyw3NS40NTQgICAgYzAsOS41MjgsMy4zMjMsMTcuNjE5LDkuOTY5LDI0LjI2NnMxNC42MjcsOS45NywyMy45MjksOS45N2M5LjUyMywwLDE3LjYxMy0zLjMyMywyNC4yNi05Ljk3czkuOTctMTQuNzM3LDkuOTctMjQuMjY2di03NS40NDcgICAgaDQ1Ljg2NHY3NS40NDdjMCw5LjUyOCwzLjMyMiwxNy42MTksOS45NjksMjQuMjY2czE0LjczLDkuOTcsMjQuMjYsOS45N2M5LjUyMywwLDE3LjYxMy0zLjMyMywyNC4yNi05Ljk3ICAgIHM5Ljk2OS0xNC43MzcsOS45NjktMjQuMjY2di03NS40NDdoMjQuOTI4YzkuOTY5LDAsMTguNDk0LTMuNTQ0LDI1LjU5NC0xMC42MzFjNy4wODYtNy4wODcsMTAuNjMxLTE1LjcyMywxMC42MzEtMjUuOTI0VjE4NS40NSAgICBIMTIzLjk3MVY0MDYuODA0eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiIvPgoJCTxwYXRoIGQ9Ik00NzYuMjc1LDE3OS4xNDFjLTkuMzA5LDAtMTcuMjgzLDMuMjc0LTIzLjkzLDkuODA0Yy02LjY0Niw2LjU0Mi05Ljk2OSwxNC41NzgtOS45NjksMjQuMDk0djE0Mi45MTQgICAgYzAsOS41NDEsMy4zMjIsMTcuNjE5LDkuOTY5LDI0LjI2NnMxNC42MjcsOS45NywyMy45Myw5Ljk3YzkuNTIzLDAsMTcuNjEzLTMuMzIzLDI0LjI2LTkuOTdzOS45NjktMTQuNzI1LDkuOTY5LTI0LjI2NlYyMTMuMDM5ICAgIGMwLTkuNTE3LTMuMzIyLTE3LjU1Mi05Ljk2OS0yNC4wOTRDNDkzLjg4OCwxODIuNDE1LDQ4NS43OTgsMTc5LjE0MSw0NzYuMjc1LDE3OS4xNDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIi8+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPgo=",
      href: "https://play.google.com/store/apps/details?id=com.wolffun.thetanarena",
    },
    {
      device: "ios",
      img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1MTIuMDAzIDUxMi4wMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxzY3JpcHQvPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTM1MS45OCwwYy0yNy4yOTYsMS44ODgtNTkuMiwxOS4zNi03Ny43OTIsNDIuMTEyYy0xNi45NiwyMC42NC0zMC45MTIsNTEuMjk2LTI1LjQ3Miw4MS4wODggICAgYzI5LjgyNCwwLjkyOCw2MC42NC0xNi45Niw3OC40OTYtNDAuMDk2QzM0My45MTYsNjEuNTY4LDM1Ni41NTYsMzEuMTA0LDM1MS45OCwweiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIvPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDU5Ljg1MiwxNzEuNzc2Yy0yNi4yMDgtMzIuODY0LTYzLjA0LTUxLjkzNi05Ny44MjQtNTEuOTM2Yy00NS45MiwwLTY1LjM0NCwyMS45ODQtOTcuMjQ4LDIxLjk4NCAgICBjLTMyLjg5NiwwLTU3Ljg4OC0yMS45Mi05Ny42LTIxLjkyYy0zOS4wMDgsMC04MC41NDQsMjMuODQtMTA2Ljg4LDY0LjYwOGMtMzcuMDI0LDU3LjQwOC0zMC42ODgsMTY1LjM0NCwyOS4zMTIsMjU3LjI4ICAgIGMyMS40NzIsMzIuODk2LDUwLjE0NCw2OS44ODgsODcuNjQ4LDcwLjIwOGMzMy4zNzYsMC4zMiw0Mi43ODQtMjEuNDA4LDg4LTIxLjYzMmM0NS4yMTYtMC4yNTYsNTMuNzkyLDIxLjkyLDg3LjEwNCwyMS41NjggICAgYzM3LjUzNi0wLjI4OCw2Ny43NzYtNDEuMjgsODkuMjQ4LTc0LjE3NmMxNS4zOTItMjMuNTg0LDIxLjEyLTM1LjQ1NiwzMy4wNTYtNjIuMDggICAgQzM4Ny44NTIsMzQyLjYyNCwzNzMuOTMyLDIxOS4xNjgsNDU5Ljg1MiwxNzEuNzc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIvPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4K",
      href: "https://apps.apple.com/us/app/thetan-arena/id1584926372",
    },
    {
      device: "pc",
      img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c3ZnanM9Imh0dHA6Ly9zdmdqcy5jb20vc3ZnanMiIHZlcnNpb249IjEuMSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA0NzUuMDgyIDQ3NS4wODIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxzY3JpcHQvPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSIwLDQwOS43MDUgMTk0LjcxNiw0MzYuNTQxIDE5NC43MTYsMjUwLjY3NyAwLDI1MC42NzcgICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiLz4KCQk8cG9seWdvbiBwb2ludHM9IjAsMjI2LjY5MiAxOTQuNzE2LDIyNi42OTIgMTk0LjcxNiwzOC41NDQgMCw2NS4zOCAgICIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIvPgoJCTxwb2x5Z29uIHBvaW50cz0iMjE2LjEyOSw0MzkuMzk4IDQ3NS4wODIsNDc1LjA4MiA0NzUuMDgyLDI1MC42NzcgNDc1LjA4MiwyNTAuNjc0IDIxNi4xMjksMjUwLjY3NCAgICIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIvPgoJCTxwb2x5Z29uIHBvaW50cz0iMjE2LjEzMiwzNS42ODggMjE2LjEzMiwyMjYuNjkyIDQ3NS4wODIsMjI2LjY5MiA0NzUuMDgyLDAgICAiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiLz4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+Cg==",
      href: "https://assets.thetanarena.com/pcversion/ThetanArenaSetup.exe",
    },
  ];

  const [numberOfLightnings, setNumberOfLightnings] = useState(0, () => {});

  const renderLightnings = () => {
    const Elements = [];
    for (let i = 1; i < numberOfLightnings; ++i) {
      const delay = Math.floor(Math.random() * 5 + 3) / 10;
      const iteration = Math.floor(Math.random() * 4 + 2);
      const duration = Math.floor(5 + (5/iteration)) / 20;
      Elements.push(
        <div
          key={i}
          className="Lightning"
          style={location.pathname === "/home" ? {animation: `lightningStrike ${duration}s ease ${iteration} ${delay}s` } : {}}
        ></div>
      );
    }
    return Elements;
  };
  const renderDownloadContents = (item) => {
    return (
      <div className="Download-Content Wrapper">
        <img className="Download-Icon" src={item.img} />
        <div
          className="Download-Name"
          style={item.device.length > 3 ? { textTransform: "capitalize" } : {}}
        >
          {item.device}
        </div>
      </div>
    );
  };
  const renderDownloadButtons = () => {
    const Elements = [];
    downloadUrls.forEach((item, index) => {
      Elements.push(
        <BulletButton
          className="Download-Button"
          key={index}
          href={item.href}
          height="50"
          color="#00a9ff"
          hoverColor="#0df"
          renderContents={() => {
            return renderDownloadContents(item);
          }}
        />
      );
    });
    return Elements;
  };

  useEffect(() => {
    if (props.screenWidth <= BreakPoints.md) setNumberOfLightnings(6);
    else if (props.screenWidth <= BreakPoints.lg) {
      setNumberOfLightnings(6);}
    else if(props.screenWidth <= 1699) {
      setNumberOfLightnings(6)}
    else setNumberOfLightnings(7);
  }, [props.screenWidth]);
  return (
    <div className="Page Home">
      <video
        className="VideoBackground"
        style={
          props.screenWidth > BreakPoints.md
            ? { objectFit: "cover" }
            : { objectFit: "contain" }
        }
        playsInline
        autoPlay
        muted
        loop
      >
        <source src="/videos/home.mp4" type="video/mp4" />
      </video>
      <div className="Information">
        <div className="Name-Wrapper Wrapper">
          <div className="Name-Container">
            <div className="Name-Lightning">{renderLightnings()}</div>
            <div className="Name">THETAN</div>
            <div className="Name" style={{ color: "#ff63fa" }}>
              ARENA
            </div>
          </div>
        </div>
        <div className="Paragraph-Wrapper Wrapper">
          <div
            onAnimationEnd={(e) => {
              e.target.className = "Paragraph";
            }}
            style={
              location.pathname === "/home" ? { animationDelay: ".5s" } : {}
            }
            className={`Paragraph Hide ${
              location.pathname === "/home" ? "AppearAnimation" : ""
            }`}
          >
            Thetan Arena is an esport game based on blockchain technology.
            <br /> You can gather your friends, form a team, battle with others
            and earn money with just your skills.
          </div>
        </div>
        <div className="Paragraph-Wrapper Wrapper">
          <div
            onAnimationEnd={(e) => {
              e.target.className = "Paragraph";
            }}
            className={`Paragraph Hide  ${
              location.pathname === "/home" ? "AppearAnimation" : ""
            }`}
            style={
              location.pathname === "/home"
                ? { animationDelay: ".5s", color: "#00a9ff" }
                : { color: "#00a9ff" }
            }
          >
            #ThetanArena #MobaNFT #FreeToPlay #BattleToEarn
          </div>
        </div>
        <div
          onAnimationEnd={(e) => {
            e.target.className = "Player-Wrapper";
          }}
          style={location.pathname === "/home" ? { animationDelay: ".9s" } : {}}
          className={`Player-Wrapper Hide  ${
            location.pathname === "/home" ? "AppearAnimation" : ""
          }`}
        >
          <div className="Player-Container HasFlag">
            <div className="Player-Text">TOTAL PLAYERS</div>
            <div className="Player-Number" style={{ color: "#ff63fa" }}>
              22,973,262
            </div>
          </div>
        </div>
        <div className="Download-Wrapper Wrapper">
          <div
            onAnimationEnd={(e) => {
              e.target.className = "Download-Container";
            }}
            style={
              location.pathname === "/home" ? { animationDelay: ".5s" } : {}
            }
            className={`Download-Container Hide  ${
              location.pathname === "/home" ? "AppearAnimation" : ""
            }`}
          >
            {renderDownloadButtons()}
          </div>
        </div>
        <div className="Trade-Wrapper Wrapper">
          <div
            onAnimationEnd={(e) => {
              e.target.className = "Trade-Container";
            }}
            style={
              location.pathname === "/home" ? { animationDelay: ".8s" } : {}
            }
            className={`Trade-Container Hide  ${
              location.pathname === "/home" ? "AppearAnimation" : ""
            }`}
          >
            <div className="Address-Wrapper Wrapper">
              <div className="Address-Container">
                <div className="THG-Wrapper">
                  <span>$THG Contract Address</span>
                  <table>
                    <tbody>
                      <tr>
                        <td className="Table-Tag">BEP20</td>
                        <td className="Table-Key">
                          <div>0x9fd87aefe02441b123c3c32466cd9db4c578618f</div>
                          <CopyButton value="0x9fd87aefe02441b123c3c32466cd9db4c578618f" />
                        </td>
                      </tr>
                      <tr>
                        <td className="Table-Tag">KRC20</td>
                        <td className="Table-Key">
                          <div>0xF0051fd4758147F1749D1696C9266d047B4c43Fa</div>
                          <CopyButton value="0xF0051fd4758147F1749D1696C9266d047B4c43Fa" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="THC-Wrapper">
                  <span>$THC Contract Address</span>
                  <table>
                    <tbody>
                      <tr>
                        <td className="Table-Tag">BEP20</td>
                        <td className="Table-Key">
                          <div>0x24802247bd157d771b7effa205237d8e9269ba8a</div>
                          <CopyButton value="0x24802247bd157d771b7effa205237d8e9269ba8a" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="Button-Wrapper Wrapper">
              <a
                className="Button"
                href="https://pancakeswap.finance/swap"
                target="_blank"
              >
                <span>TRADE NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
