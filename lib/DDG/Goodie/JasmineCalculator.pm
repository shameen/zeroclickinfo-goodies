package DDG::Goodie::JasmineCalculator;

use DDG::Goodie;
use strict;
use warnings;

zci answer_type => 'jasmine_calculator';

zci is_cached => 1;

triggers any => 'triggerword', 'trigger phrase';

handle remainder => sub {

    my $remainder = $_;

    return 'plain text response',
        structured_answer => {
            data => 1,
            templates => 1
        };
};

1;
