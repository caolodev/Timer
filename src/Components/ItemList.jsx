import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const ItemList = ({
  formatTime,
  id,
  time,
  reloadTimer,
  removeItem,
  date,
  hour,
}) => {
  return (
    <li
      onClick={() => reloadTimer(id, time)}
      className="cursor-pointer flex items-center justify-between p-4 bg-card border border-[#E1E7EF] rounded-2xl group transition-all hover:border-primary/20 hover:border-amber-300 hover:"
    >
      <div className="flex items-center gap-4">
        <div className="font-mono flex items-baseline">
          <span className="text-lg">
            {formatTime(time).split(":")[0]}:{formatTime(time).split(":")[1]}
          </span>
          <span className="text-xs ml-0.5 text-[#65758b]">
            :{formatTime(time).split(":")[2]}
          </span>
        </div>
        <span className="text-[12px] text-[#65758b] bg-muted px-1.5 py-0.5 rounded uppercase font-medium">
          {hour}-{date}
        </span>
      </div>
      <div className="flex items-center gap-1 cursor-pointer">
        <button
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(), removeItem(id);
          }}
        >
          <FontAwesomeIcon
            icon={faTrashCan}
            className="lucide text-[#65758b] w-4 h-4 p-2 text-xs rounded-lg hover:text-[#f73b2d] hover:bg-[#ffa8a8]"
          />
        </button>
      </div>
    </li>
  );
};

export default ItemList;
