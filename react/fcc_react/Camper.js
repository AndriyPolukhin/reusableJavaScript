class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};

const Camper = (props) => {
  return <p>{props.name}</p>
};

Camper.default = { name="CamperBot" }
CamperpropTypes = {name: PropTypes.string.isRequired }