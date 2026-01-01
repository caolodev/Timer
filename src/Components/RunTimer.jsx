import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
const RunTimer = ({
  formatTime,
  time,
  running,
  pauseTimer,
  runTimer,
  resetTimer,
}) => {
  return (
    <div className="border border-[#E1E7EF] rounded-3xl p-8 shadow-[0_0_1_0] flex flex-col items-center space-y-8">
      <div className="flex items-baseline font-mono font-medium tracking-tighter tabular-nums">
        <span className="text-7xl">
          {formatTime(time).split(":")[0]}:{formatTime(time).split(":")[1]}
        </span>
        <span className="text-3xl ml-1 text-[#65758B]">
          :{formatTime(time).split(":")[2]}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          style={{ backgroundColor: running ? "#fef3c7" : "#2463eb" }}
          onClick={running ? pauseTimer : runTimer}
          className="h-16 w-16 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 bg-[#2463EB] text-[#65758b] cursor-pointer"
        >
          {running ? (
            <FontAwesomeIcon
              style={{ color: running && "#D97706" }}
              icon={faPause}
              className="lucide text-white w-8 h-8 fill-current ml-1 text-3xl"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlay}
              className="lucide text-white w-8 h-8 fill-current ml-1 text-3xl"
            />
          )}
        </button>
        <button
          onClick={resetTimer}
          className="cursor-pointer h-12 w-12 rounded-full border-[#E1E7EF] border flex items-center justify-center text-[#65758B] transition-all disabled:opacity-30"
        >
          <FontAwesomeIcon icon={faArrowRotateLeft} />
        </button>
      </div>
    </div>
  );
};

export default RunTimer;
