import ListPost from "./ListPost";
import ModalPost from "./ModalPost";
import "./css/index.css"

export default function Home() {
  return (
    <div className="overflow-y-scroll h-full hide-scrollbar">
      <ModalPost />
      <ListPost />
    </div>
  )
}
