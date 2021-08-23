const Header = () => {
  return (
    <div className="calendar-header">
      <span className="month-picker" id="month-picker">
        February
      </span>
      <div className="year-picker">
        <span className="year-change" id="prev-year">
          <pre>{"<"}</pre>
        </span>
        <span id="year">2021</span>
        <span className="year-change" id="next-year">
          <pre>{">"}</pre>
        </span>
      </div>
    </div>
  );
};

export default Header;
