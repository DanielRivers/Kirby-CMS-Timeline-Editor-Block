# Kirby-CMS-Timeline-Editor-Block
Timeline block for [KirbyCMS Editor](https://github.com/getkirby/editor)

## Turn this
![Panel View](example/panel_screenshot.png?raw=true "Panel")

## Into this!
![Example from the example.css](example/example.png?raw=true "Example")

### Settings

![Settings](example/settings.png?raw=true "Settings")

### Outputted HTML

```
<ul class="timeline">
  <li class=""> <!-- This is the CSS Class from Settings -->
      <div class="timeline-badge primary">
          <span>&#9737;</span> <!-- This is the Icon from Settings -->
      </div>
      <div class="timeline-panel">
          <div class="timeline-heading">
              1947        <!-- This is the Title from Settings -->
          </div>
          <div class="timeline-body">
              <p>
                  <!-- This is the Main content -->
                  Partition of India, formation of the new state of Pakistan, included East Bengal. Assam became a province of North Eastern India. There was no set restrictions on the migration of people from Pakistan and India after partition.            
              </p>
          </div>
          <div class="timeline-footer"></div>
      </div>
  </li>
</ul>
```

### Todo
- Add Translations
