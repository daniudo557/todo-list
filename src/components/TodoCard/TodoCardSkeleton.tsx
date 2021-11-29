import { Card, Skeleton } from "@mui/material";
import "./TodoCard.scss";

interface TodoCardSkeletonProps {
  type?: "small" | "large";
}

const TodoCardSkeleton = ({ type = "small" }: TodoCardSkeletonProps) => {
  return (
    <>
      {[1]?.map((i) => (
        <Card className="card">
          <div
            style={{
              width: "100%",
              height: type === "small" ? "64px" : "406px",
            }}
          >
            <Skeleton
              animation="wave"
              sx={{ width: "100%", height: "100%" }}
              variant="rectangular"
            />
          </div>
        </Card>
      ))}
    </>
  );
};

export default TodoCardSkeleton;
