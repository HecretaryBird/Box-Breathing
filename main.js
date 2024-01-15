        document.addEventListener("DOMContentLoaded", function () {
            const canvas = document.getElementById("arrowCanvas");
            const ctx = canvas.getContext("2d");

            const fixedPoint = { x: 50, y: 50 };

            function drawArrow(start, end) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Draw arrow body
                ctx.beginPath();
                ctx.moveTo(start.x, start.y);
                ctx.lineTo(end.x, end.y);
                ctx.stroke();

                // Draw arrowhead
                const angle = Math.atan2(end.y - start.y, end.x - start.x);
                ctx.save();
                ctx.translate(end.x, end.y);
                ctx.rotate(angle);

                ctx.beginPath();
                ctx.moveTo(-10, -5);
                ctx.lineTo(0, 0);
                ctx.lineTo(-10, 5);
                ctx.stroke();

                ctx.restore();
            }

            function updateArrow(event) {
                const cursorPosition = getCursorPosition(canvas, event);
                drawArrow(fixedPoint, cursorPosition);
            }

            function getCursorPosition(canvas, event) {
                const rect = canvas.getBoundingClientRect();
                return {
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                };
            }

            canvas.addEventListener("mousemove", updateArrow);

        var slider = document.getElementById("myRange");
        var label = document.getElementById("rangeLabel");
        label.innerHTML = slider.value;
        slider.oninput = function() {
            label.innerHTML = this.value;
        };

        });

