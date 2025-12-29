import Empty from "./Empty.jsx";
import ItemList from "./ItemList.jsx";

const ListTimer = ({ listTimer, formatTime, reloadTimer, removeItem }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground px-2">
        <h2 className="text-[#65758B]">Histórico Recente</h2>
      </div>
      {listTimer.length > 0 ? (
        <ul className="space-y-2">
          {listTimer.map(({ id, time, date, hour }) => {
            return (
              <ItemList
                key={id}
                reloadTimer={reloadTimer}
                removeItem={removeItem}
                time={time}
                id={id}
                date={date}
                hour={hour}
                formatTime={formatTime}
              />
            );
          })}
        </ul>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default ListTimer;
