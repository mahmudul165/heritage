import Skeleton from 'react-loading-skeleton';

// Create a reusable function to generate skeleton elements
function SkeletonBlock() {
  return (
    <div className="col-sm-12 col-md-3 pe-2">
      <div>
        <Skeleton height={250}>
          <div className="d-flex">
            <Skeleton height={30} width={90} borderRadius={10} highlightColor="red" />
            <Skeleton height={30} width={90} borderRadius={10} highlightColor="red" />
          </div>
        </Skeleton>
        <div>
          <div className="d-flex p-2 justify-content-center align-items-center">
            <Skeleton height={30} width={180} />
          </div>
          <Skeleton height={30} width={250} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SkeletonBlock;