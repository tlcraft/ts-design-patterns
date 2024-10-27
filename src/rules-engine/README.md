# Rules Engine Example

This script plays with the idea of a Rules Engine.

Imagine if various items have a quality attribute that is changed each day.

A rules engine can be used to apply the changes.

## Examples

Here are several items and the logic for how each should be processed.

### Cheese
- Increases in quality with time
- When the days remaining is over 10 days it should increase in quality by 1
- When the days reaming is between 5 and 9 days it should increase in quality by a total of 2
- When the days remaining are less than 5 it should increase in quality by a total of 3

### Emerald
- The qualify is always 80

### Regular Items
- The qualify can't go below 0
- When days remaining is above 10 the quality decreases by 1 each day
- When the days remaining is equal to or below 10 the quality decreases by a total of 2

## References

- [Design Pattersn Rules Enginer](https://softwarehut.com/blog/tech/design-patterns-rules-engine)
- [Rules Engine Pattern](https://deviq.com/design-patterns/rules-engine-pattern)
