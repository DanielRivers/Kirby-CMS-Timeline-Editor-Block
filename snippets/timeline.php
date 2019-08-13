
<?php if (is_null($prev) || $prev->type() !== 'timeline'): ?>

<ul class="timeline">
<?php endif ?>
<li class="<?= $attrs->css() ?>">
    <div class="timeline-badge primary">
        <span><?= $attrs->iconCode()->or('&#9737;') ?></span>
    </div>
    <div class="timeline-panel">
        <div class="timeline-heading">
            <?= $attrs->title() ?>
        </div>
        <div class="timeline-body">
            <p>
                <?= $content ?>
            </p>
        </div>
        <div class="timeline-footer"></div>
    </div>
</li>

<?php if (is_null($next) || $next->type() !== 'timeline'): ?>
<li class="clearfix" style="float: none;"></li>
</ul>
<?php endif ?>

