import { useRef, useEffect, useState } from "react";
import Spritesheet from "react-responsive-spritesheet";

import idleSprite from "../static/good_boi/idle_gray.png";
import walkDownSprite from "../static/good_boi/walk_down_gray.png";
import walkDownLeftSprite from "../static/good_boi/walk_down_left_gray.png";
import walkDownRightSprite from "../static/good_boi/walk_down_right_gray.png";
import walkLeftSprite from "../static/good_boi/walk_left_gray.png";
import walkRightSprite from "../static/good_boi/walk_right_gray.png";
import walkUpSprite from "../static/good_boi/walk_up_gray.png";
import walkUpLeftSprite from "../static/good_boi/walk_up_left_gray.png";
import walkUpRightSprite from "../static/good_boi/walk_up_right_gray.png";

const Doggo = ({
  initialX,
  initialY,
}: {
  initialX: number;
  initialY: number;
}) => {
  const goodboi = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [doggoPos, setDoggoPos] = useState({ x: initialX, y: initialY });
  const [isFollowing, setIsFollowing] = useState(false);
  const [currentSprite, setCurrentSprite] = useState(idleSprite);
  const [facingRight, setFacingRight] = useState(true);

  // Constants
  const SPEED = 1;
  const DIRECTION_THRESHOLD = 0.5; // Threshold for determining diagonal movement

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  const determineSprite = (dx: number, dy: number) => {
    // If not moving, use idle sprite
    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
      return idleSprite;
    }

    // Normalize the direction vectors
    const length = Math.sqrt(dx * dx + dy * dy);
    const normalizedDx = dx / length;
    const normalizedDy = dy / length;

    // Determine direction based on normalized vectors
    if (Math.abs(normalizedDy) > DIRECTION_THRESHOLD) {
      if (normalizedDy > 0) {
        // Moving down
        if (normalizedDx > DIRECTION_THRESHOLD) return walkDownRightSprite;
        if (normalizedDx < -DIRECTION_THRESHOLD) return walkDownLeftSprite;
        return walkDownSprite;
      } else {
        // Moving up
        if (normalizedDx > DIRECTION_THRESHOLD) return walkUpRightSprite;
        if (normalizedDx < -DIRECTION_THRESHOLD) return walkUpLeftSprite;
        return walkUpSprite;
      }
    } else {
      // Moving primarily horizontally
      if (normalizedDx > 0) {
        return walkRightSprite;
      } else {
        return walkLeftSprite;
      }
    }
  };

  useEffect(() => {
    const animate = () => {
      if (isFollowing) {
        setDoggoPos((currentPos) => {
          // Calculate direction to mouse
          const dx = mousePosition.x - currentPos.x;
          const dy = mousePosition.y - currentPos.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < SPEED) {
            setCurrentSprite(idleSprite);
            return mousePosition;
          }

          // Normalize direction and multiply by speed
          const normalizedDx = (dx / distance) * SPEED;
          const normalizedDy = (dy / distance) * SPEED;

          if (normalizedDx > 0) {
            setFacingRight(true);
          } else {
            setFacingRight(false);
          }

          // Update sprite based on movement direction
          setCurrentSprite(determineSprite(normalizedDx, normalizedDy));

          return {
            x: currentPos.x + normalizedDx,
            y: currentPos.y + normalizedDy,
          };
        });
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isFollowing]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        setCurrentSprite(idleSprite);
        setIsFollowing((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleDoggoClick = () => {
    setCurrentSprite(idleSprite);
    setIsFollowing((prev) => !prev);
  };
  return (
    <div
      ref={goodboi}
      className={`fixed cursor-pointer hidden lg:block w-12 h-12 ${facingRight && currentSprite == idleSprite ? "scale-x-[-1]" : ""}`}
      style={{
        left: `${doggoPos.x - 24}px`,
        top: `${doggoPos.y - 24}px`,
      }}
      onClick={handleDoggoClick}
    >
      <Spritesheet
        image={currentSprite}
        widthFrame={164}
        heightFrame={136}
        steps={8}
        fps={8}
        direction="forward"
        loop={true}
      ></Spritesheet>
    </div>
  );
};

export default Doggo;
